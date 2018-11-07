#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Author: Alan-11510 
# Date: 2018/11/8
# version: 1.0
# python_version: 3.62

import re
import traceback

import requests
from bs4 import BeautifulSoup
import pymongo as mongo

import my_conf as MyConf
import logpy as lg

# 暂时： 院系应包含 名称 教务系统查询代码 主页连接 头像地址 介绍 专业{} 开课{}
class Faculties(object):
    def __init__(self):
        self.__mongo_client = mongo.MongoClient("mongodb://localhost:27017/")
        lg.log("test connection: " + str(self.__mongo_client.server_info()))  # test connection

        self.db = self.__mongo_client["coursitter"]
        lg.log("test mongo db: " + str(self.db.list_collection_names()))  # test mongo db

        self.collection = self.db["faculty"]
        item = self.collection.find_one()
        lg.log("test db collection: " + str(item))     # test db collection

        self.cfg = MyConf.Myconf()
        self.local_ini_path = "./conf/init_request.ini"
        self.url_pattern = re.compile("^/.*")

        # faculty_name : [ info ]
        self.temp_faculties = {}
        self.functional_init()

        self.faculties = []

    def to_mongo(self):
        if len(self.temp_faculties) != 0:
            for faculty_name in self.temp_faculties:
                temp_faculty = []
                temp_faculty.append(faculty_name)
                temp_faculty.extend(self.temp_faculties[faculty_name])
                temp_faculty.extend(["","","",""])
                self.add_faculty(temp_faculty)
            self.temp_faculties.clear()

        try:
            self.collection.insert_many(self.faculties)
            self.faculties.clear()
        except:
            print(traceback.format_exc())

    def add_faculty(self,list):
        faculty = {
            "name": "",
            "query_code":"",
            "home_link":"",
            "avater_url": "",
            "discription":"",
            "majors":"",
            "courses":""
        }

        try:
            if len(list) == len(faculty):
                index = 0
                for key in faculty:
                    faculty[key] = list[index]
                    index += 1
                self.faculties.append(faculty)
        except:
            print(traceback.format_exc())

    def close_db(self):
        try:
            self.__mongo_client.close()
        except:
            print(traceback.format_exc())

    def functional_init(self):
        self.read_from_local_ini(self.local_ini_path)
        self.init_urls()
    def read_from_local_ini(self,init_file_path):
        try:
            self.cfg.read(init_file_path,encoding="utf-8")

            # 从配置中读取 院系
            faculties_dict = self.cfg.items("faculties")
            # 去除头部的长度标志
            faculties_dict.pop(0)

            if len(self.temp_faculties) == 0:
                for faculty_key in faculties_dict:
                    self.temp_faculties[faculty_key[1]] = [faculty_key[0]]
        except:
            print(traceback.format_exc())
    def init_urls(self):
        req = requests.get("http://www.sustc.edu.cn/")
        soup = BeautifulSoup(req.text,"lxml")

        div = soup.find("div",attrs={"key":"key2"})
        blocks = div.find_all("div",attrs={"class":"strong"})

        for block in blocks:
            faculty_link_tag = block.find("a")

            faculty_name = str(block.text).replace("\n","").replace("\r","")
            faculty_url = ""
            if self.url_pattern.match(faculty_link_tag["href"]):
                faculty_url = "http://www.sustc.edu.cn" + faculty_link_tag["href"]
            else:
                faculty_url = faculty_link_tag["href"]

            if faculty_name in self.temp_faculties:
                self.temp_faculties[faculty_name].append(faculty_url)
            else:
                self.temp_faculties[faculty_name] = ["",faculty_url]

        for faculty in self.temp_faculties:
            if len(self.temp_faculties[faculty]) == 1:
                self.temp_faculties[faculty].append("")

if __name__ == '__main__':
    a = Faculties()
    # a.to_mongo()