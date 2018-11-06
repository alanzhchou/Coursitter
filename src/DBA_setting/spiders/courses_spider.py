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
from configparser import ConfigParser
import os

import courses
import cas
import logpy as lg


class CourseSpider(object):
    def __init__(self,username,password):
        self.session = requests.session()
        self.set_cas_session(username,password)

        self.coding = None
        self.semesters = []
        self.faculties = {}

        self.courses_url = "http://jwxt.sustc.edu.cn/jsxsd/xkgl/kcjjQuery" # post 方式
        self.course_detail_url = "/jsxsd/xkgl/kcjjQuery?type=1&kcid=" #"+kcid" post方式

        self.init_request_file_path = "./conf/init_request.ini"
        self.cfg = ConfigParser()
        self.__init_request()
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
        req = self.session.post(self.courses_url,data=data)
        print(req.text)

        for semester in self.semesters:
            for faculty_key in self.faculties:
                data["xnxq01id"] = semester
                data["xx0301id"] = faculty_key
                self.spider_first_page_course(data)

    # 对每个 学年学期 和 每个 院系
    # 先只搜索 第一页
    # 再根据 第一页上 是否 总页数超过一页 再查找其他页
    def spider_first_page_course(self,data):
        courses = []
        page = self.session.post(self.courses_url,data=data)
        soup = BeautifulSoup(page)

        # 找到数据表
        table = soup.find("table",attrs={"class":"Nsb_r_list Nsb_table"})

        # 找到数据各行
        trs = table.find_all("tr")

        # 去除表头 和 “未查询到数据”   由于至少有这两行 所以不会报错
        trs.pop(len(trs)-1)
        trs.pop(0)

        # 生成课程 信息
        for tr in trs:
            tds = tr.find_all("td")
            # 第一个为 序号
            # 第二个为 学年学期
            # 第三个为 开课院系
            # 第四个为 课程代码
            # 第五个为 课程名称
            # 第六个为 学分
            # 第七个为 学时
            # 第八个为 是否启用
            # 第九个为 导向详情的连接
            # < a href = "javascript:void(0);" onclick = "javascript:kcjjQueryxq('CS201')" > 查看 < / a >

            # 去除 序号 和 导向详情的链接
            tds.pop(len(tds)-1)
            tds.pop(0)

            course = []
            for td in tds:
                course.append(td.text)

            # 第三个有效 td 中的text 为 课程代码
            details = self.get_course_details(tds[2].text)

        # 寻找共有几页
        page = soup.find("div",attrs={"class":"Nsb_r_list_fy3"})
        all_pages = page.find("span").text

        if int(all_pages) > 1:
            self.spider_pages(data,all_pages)

    # 对于每页上 存在的 课程 依次请求详情页 补全课程信息
    def get_course_details(self,course_id):
        pass

    # 察觉到 该学期 该院系开课 超过 一页
    # 查找剩余的院系
    def spider_pages(self,data,all_pages):
        pass


    # 根据新传入的 username 和 password 重新设置 session ， 初始化后几乎不用
    def set_cas_session(self,username,password):
        util = cas.CAS()
        self.session = util.get_jwxt_session(username,password)

    # 若存在配置文件则优先从配置文件中读取，
    # 否则进行请求 将得到的 学年学期 和 院系 情况写入配置文件中 只初始化时执行一次
    def __init_request(self):
        if os.path.exists(self.init_request_file_path):
            lg.log("read from local ini")
            self.__read_init_from_file()
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

                self.__write_init_to_file()
            except:
                print("wrong on request for init")
    def __write_init_to_file(self):
        try:
            self.cfg.read(self.init_request_file_path,encoding="utf-8")

            # 写入学年学期 semesters_length 为总共有多少学期
            for index in range(len(self.semesters)):
                self.cfg.set("semesters",str(index),str(self.semesters[index]))
            self.cfg.set("semesters", "semesters_length", str(len(self.semesters)))

            # 写入院系 faculties_length 为总共有多少院系
            for key in self.faculties:
                self.cfg.set("faculties",key,self.faculties[key])
            self.cfg.set("faculties", "faculties_length", str(len(self.faculties)))

            # 写回配置文件中
            with open(self.init_request_file_path,'w+',encoding="utf-8") as f:
                self.cfg.write(f)
        except:
            print("write conf wrong")
    def __read_init_from_file(self):
        try:
            self.cfg.read(self.init_request_file_path,encoding="utf-8")

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
    print(a.semesters)
    print(a.faculties)

    # a.start_spider()










