#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Author: Alan-11510 
# Date: 2018/11/6
# version: 1.0
# python_version: 3.62

import requests
from bs4 import BeautifulSoup
import traceback

import logpy as lg

class CAS(object):
    def __init__(self):
        self.jwxt_login_url = "https://cas.sustc.edu.cn/cas/login?service=http%3A%2F%2Fjwxt.sustc.edu.cn%2Fjsxsd%2Fframework%2FxsMain.jsp"

        self.username = ""
        self.password = ""
        self.jwxt_session = requests.session()

    def __set_jwxt_session(self, user_name, password):
        try:
            cas_page = requests.get(self.jwxt_login_url)

            soup = BeautifulSoup(cas_page.text, "lxml")
            temp_execution = soup.find(attrs={"name": "execution"})["value"]
            log_data = {
                        "username": user_name,
                        "password": password,
                        "_eventId": "submit",
                        "execution": temp_execution,
                        "geolocation": "",
                    }

            session = requests.session()
            login = session.post(self.jwxt_login_url,data=log_data)
            if login.status_code == 200:
                self.username = user_name
                self.password = password
                self.jwxt_session = session
                lg.write("username: " + str(user_name) + ", password: " + str(password) + "\t" + str(session.cookies))
                lg.close()
        except:
            message = traceback.format_exc()
            print(message)
            lg.write(message)
            lg.close()

    def get_jwxt_session(self, user_name, password):
        if (user_name != self.username) or (password != self.password) or (len(self.jwxt_session.cookies) == 0):
            self.__set_jwxt_session(user_name,password)
        return self.jwxt_session

if __name__ == '__main__':
    with open("./secret_test/cas_test.txt") as f:
        code_lines = f.readlines()
        code = ""

        for line in code_lines:
            code += line
        exec ( code )




