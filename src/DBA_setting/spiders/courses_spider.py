#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Author: Alan-11510 
# Date: 2018/11/5
# version: 1.0
# python_version: 3.62
# discription : 用来 查询 生成基本的院系开课计划 和 课程详情

import requests
from bs4 import BeautifulSoup
import re
import os
import traceback
import time

import courses
import cas
import logpy as lg
from my_conf import Myconf


class CourseSpider(object):
    def __init__(self,username,password):
        self.courses_url = "http://jwxt.sustc.edu.cn/jsxsd/xkgl/kcjjQuery" # post 方式
        self.course_detail_url = "http://jwxt.sustc.edu.cn/jsxsd/xkgl/kcjjQuery?type=1&kcid=" #"+kcid" post方式
        # javascript:kcjjQueryxq('DDCF2D40E2D049B6B9040E035F1EE345')
        self.details_pattern = re.compile("javascript:kcjjQueryxq\(\'(.*)\'\)")
        #  共2页 22条
        self.page_info_pattern = re.compile("[\u4e00-\u9fa5](\d*)[\u4e00-\u9fa5].(\d*).*")

        self.cfg = Myconf()

        self.session = requests.session()
        self.set_cas_session(username,password)

        self.coding = None

        self.semesters = []
        self.faculties = {}

        # 初始化所以 学期 和 所有 院系
        self.__init_request("./conf/init_request.ini")

        # self.semesters = ["2018-2019-2","2018-2019-1"]

        self.basic_data = {
            "xnxq01id": "",     # important !!! the semester
            "xx0301id": "",     # inportant !!! the faculty
            "kch": "",
            "kcmc": "",
            "jx02id": "",
            "pageIndex": "1",     # important !!! page index( 20 rows / page )
        }

        # courses 类 可将储存的 course 信息直接导入 mongo 数据库
        self.courses = courses.Courses()

    def start_spider(self):
        data = self.basic_data
        courses = []

        for semester in self.semesters:
            for faculty_key in self.faculties:
                print("\r\nsemester: ", semester, "\tfaculty: ", self.faculties[faculty_key])
                data["xnxq01id"] = semester
                data["xx0301id"] = faculty_key
                one_type = self.spider_one_type_course(data)
                courses.extend(one_type)

                print(len(one_type))
        for course in courses:
            self.courses.add_course(course)
        self.courses.courses_to_mongodb()
        self.courses.close_db()

    # 对每个 学年学期 和 每个 院系
    # 先只搜索 第一页 找到页面上的总页数 再根据 总页数 查询所有课程
    def spider_one_type_course(self,data):
        try:
            one_type = self.session.post(self.courses_url, data=data)
            soup = BeautifulSoup(one_type.text, "lxml")

            # 寻找共有几页
            page_info = soup.find("div", attrs={"class": "Nsb_r_list_fy3"}).find("span").text
            page_num = int(self.page_info_pattern.search(page_info).group(1))

            courses_num = int(self.page_info_pattern.search(page_info).group(2))
            if courses_num == 0:
                return []
            else:
                one_type_courses = self.spider_pages(data,page_num)
                return one_type_courses
        except:
            print(traceback.format_exc())

    # 查找各页
    def spider_pages(self,data,page_num):
        courses = []
        try:
            for page_index in range(1,page_num+1):
                one_page_data = data.copy()
                one_page_data["pageIndex"] = str(page_index)
                one_page_courses = self.spider_one_page(one_page_data)
                courses.extend(one_page_courses)
            return courses
        except:
            print(traceback.format_exc())

    # 只爬取一页的数据，并返回，
    def spider_one_page(self,data):
        try:
            one_page = self.session.post(self.courses_url, data=data)
            soup = BeautifulSoup(one_page.text, "lxml")

            # 找到数据表
            table = soup.find("table", attrs={"class": "Nsb_r_list Nsb_table"})

            # 找到数据各行
            trs = table.find_all("tr")
            # 去除表头 和 “未查询到数据”   由于至少有这两行 所以不会报错
            trs.pop(len(trs) - 1)
            trs.pop(0)

            courses = []
            for tr in trs:
                tds = tr.find_all("td")

                # 生成课程 信息，直接从详情页请求
                course_details = tds[8].find("a")["onclick"]
                course_details_link_id = self.details_pattern.match(course_details).group(1)
                course = self.get_course_details(data,course_details_link_id)

                # 若详情页无数据，先再请求两次，再无数据的情况下，从查询页得到简略信息
                times = 1
                while len(course) == 0 and times < 4:
                    course = self.get_course_details(data,course_details_link_id)
                    times += 1
                    if times == 4:
                        # semester, faculty, course_code, course_name, hours,credits,state
                        course = [tds[1].text,tds[2].text,tds[3].text,tds[4].text,tds[5].text,tds[6].text,"","","",tds[7].text,"",""]
                # course_id = tds[3].text
                # course_name = tds[4].text
                # if len(course) != 0:
                #     print(course_id, "\t", course_name + "\tget success")
                # else:
                #     print(course_id, "\t", course_name + "\tget failed")
                courses.append(course)
            return courses
        except:
            print(traceback.format_exc())

    # 对于每页上 存在的 课程 依次请求详情页 补全课程信息
    def get_course_details(self,data,course_id):
        try:
            url = self.course_detail_url + str(course_id)
            details_page = self.session.post(url,data=data)
            soup = BeautifulSoup(details_page.text, "lxml")

            tbody = soup.select("table.Nsb_r_list.Nsb_table")[0]
            tds = tbody.find_all("td")

            course = []
            for td in tds:
                course.append(td.text)
            return course
        except:
            print(traceback.format_exc())
            lg.write(traceback.format_exc())
            return ["error", "error"]

    # 根据新传入的 username 和 password 重新设置 session ， 初始化后几乎不用
    def set_cas_session(self,username,password):
        util = cas.CAS()
        self.session = util.get_jwxt_session(username,password)

    # 若存在配置文件则优先从配置文件中读取，
    # 否则进行请求 将得到的 学年学期 和 院系 情况写入配置文件中 只初始化时执行一次
    def __init_request(self,init_file_path):
        if os.path.exists(init_file_path):
            lg.log("read from local ini")
            self.__read_init_from_file(init_file_path)
        else:
            try:
                example_data = {
                            "xnxq01id": ["2018-2019-1",""],
                            "xx0301id": "txj2Rt7H6F",
                            "kch": "",
                            "kcmc": "",
                            "jx02id": "",
                            "pageIndex": 1,
                        }
                example_session = cas.CAS().get_jwxt_session("11510629", "303512")

                req = example_session.post(url=self.courses_url, data=example_data)
                self.coding = req.apparent_encoding
                req.encoding = self.coding
                soup = BeautifulSoup(req.text, "lxml")

                # 找到所有可选学年学期
                xnxq = soup.find("select", attrs={"id": "xnxq01id"})
                xnxq_arr = []
                for option in xnxq.find_all("option"):
                    xnxq_arr.append(option.text)
                xnxq_arr.pop(0)
                self.semesters = xnxq_arr

                # 找到所有可选开课院系
                faculty_name_oattern = re.compile(r"^\[\d+\](.*)$")
                faculties = soup.find("select", attrs={"id": "xx0301id"})
                faculties_dict = {}
                for option in faculties.find_all("option"):
                    key = option["value"]
                    if key != "":
                        value = option.text
                        faculty_name = faculty_name_oattern.match(value).group(1)
                        faculties_dict[key] = faculty_name
                self.faculties = faculties_dict

                self.__write_init_to_file(init_file_path)
            except:
                print("wrong on request for init")
    def __write_init_to_file(self,init_file_path):
        try:
            self.cfg.read(init_file_path,encoding="utf-8")

            # 写入学年学期 semesters_length 为总共有多少学期
            for index in range(len(self.semesters)):
                self.cfg.set("semesters",str(index),str(self.semesters[index]))
            self.cfg.set("semesters", "semesters_length", str(len(self.semesters)))

            # 写入院系 faculties_length 为总共有多少院系
            for key in self.faculties:
                self.cfg.set("faculties",key,self.faculties[key])
            self.cfg.set("faculties", "faculties_length", str(len(self.faculties)))

            # 写回配置文件中
            with open(init_file_path,'w+',encoding="utf-8") as f:
                self.cfg.write(f)
        except:
            print("write conf wrong")
    def __read_init_from_file(self,init_file_path):
        try:
            self.cfg.read(init_file_path,encoding="utf-8")

            # 从配置中读取 学年学期
            semesters_arr = self.cfg.items("semesters")
            # 去除头部的长度标志
            semesters_arr.pop(0)
            if len(self.semesters) == 0:
                for semester in semesters_arr:
                    self.semesters.append(semester[1])

            # 从配置中读取 院系
            faculties_dict = self.cfg.items("faculties")
            # 去除头部的长度标志
            faculties_dict.pop(0)
            if len(self.faculties) == 0:
                for faculty in faculties_dict:
                    self.faculties[faculty[0]] = faculty[1]
        except:
            print("init request read wrong")

if __name__ == '__main__':
    a = CourseSpider("11510629", "303512")
    # a.start_spider()










