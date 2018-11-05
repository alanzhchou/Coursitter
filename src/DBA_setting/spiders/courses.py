#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Author: Alan-11510 
# Date: 2018/11/5
# version: 1.0
# python_version: 3.62

import requests
from bs4 import BeautifulSoup
import re
import user_agent as ua

class Coursitter(object):
    def __init__(self,username,password):
        self.url = "http://jwxt.sustc.edu.cn/jsxsd/xkgl/kcjjQuery"
        self.headers = {
                "Host": "jwxt.sustc.edu.cn",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:63.0) Gecko/20100101 Firefox/63.0",
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                "Accept-Language": "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2",
                "Accept-Encoding": "gzip,deflate",
                "Referer": "http://jwxt.sustc.edu.cn/jsxsd/xkgl/kcjjQuery",
                "Content-Type": "application/x-www-form-urlencoded",
                "Content-Length": "92",
                "Connection": "keep-alive",
                "Upgrade-Insecure-Requests": "1",
            }
        self.cookies = {
                "Hm_lvt_6a98cecfe3e66904991232e6b5573cd9": "1540989010,1541067576,1541182979,1541322748",
                "JSESSIONID": "28C68B423EFC47C4650F1EA3D0EE8253",
                "pgv_pvi":"2020815872",
                "UM_distinctid": "165f74846a2ed-07f0f597ecf20d-4c312878-144000-165f74846a3351",
            }
        self.data = {
                "xnxq01id": ["2018-2019-1",""],
                "xx0301id": "txj2Rt7H6F",
                "kch": "",
                "kcmc": "",
                "jx02id": "",
                "pageIndex": 1,
            }

        self.basic_html_doc = None
        self.coding = None
        self.semesters = []
        self.faculties = {}

        self.init_request()

    def find_cas_jsession(self,username,password):
        pass

    def init_request(self):
        try:
            req = requests.post(url=self.url, headers=self.headers, cookies=self.cookies, data=self.data)
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
        except:
            print("wrong on init basic_html_doc")

    def getSemesters(self):
        pass

a = Coursitter(11510629,303512)
print(a.semesters)
print(a.faculties)







