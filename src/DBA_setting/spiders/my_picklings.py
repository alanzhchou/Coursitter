#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Author: Alan-11510 
# Date: 2018/11/7
# version: 1.0
# python_version: 3.62
# 序列化储存 session 或者 其他信息

try:
    import cPickle as pickle
except ImportError:
    import pickle


a = {"a":"1","b":"2","c":"3"}
print()
