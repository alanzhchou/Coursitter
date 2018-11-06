#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Author: Alan-11510 
# Date: 2018/11/6
# version: 1.0
# python_version: 3.62

import traceback

import pymongo as mongo

import logpy as lg

class Courses(object):
    def __init__(self):
        self.max_size = 500
        self.courses = []

        self.__mongo_client = mongo.MongoClient("mongodb://localhost:27017/")
        lg.log("test connection: " + str(self.__mongo_client.server_info()))  # test connection

        self.db = self.__mongo_client["coursitter"]
        lg.log("test mongo db: " + str(self.db.list_collection_names()))  # test mongo db

        self.collection = self.db["course"]
        item = self.collection.find_one()
        lg.log("test db collection: " + str(item))     # test db collection

    def add_course(self,list):
        course = {
            "semester" : "",
            "faculty" : "",
            "code" : "",
            "name" : "",
            "credit" : "",
            "hours" : "",
            "type" : "",
            "state" : "",
            "shu_xing" : "",
            "xing_zhi" : "",
            "discription" : "",
            "requirements" : [],
        }

        try:
            if len(list) == len(course):
                index = 0
                for item in course:
                    course[item] = list[index]
                    index += 1
                self.courses.append(course)

                if len(self.courses) >= self.max_size:
                    self.__many_to_mongodb()
        except:
            print(traceback.format_exc())

    def __many_to_mongodb(self):
        try:
            self.collection.insert_many(self.courses)
        except:
            print(traceback.format_exc())

    def courses_to_mongodb(self):
        try:
            self.collection.insert_many(self.courses)
        except:
            print(traceback.format_exc())

    def close_db(self):
        try:
            self.__mongo_client.close()
            return True
        except:
            print(traceback.format_exc())
            return False

if __name__ == '__main__':
    courses = Courses()
    # for i in range(600):
    #     courses.add_course(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", ["aa", "bb"]])
    #
    # courses.courses_to_mongodb()
    # courses.close_db()

