#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Author: Alan-11510 
# Date: 2018/11/7
# version: 1.0
# python_version: 3.62
# discription: 用于生成 大小写敏感的 配置文件

from configparser import ConfigParser

# 用于生成 大小写敏感的配置文件
class Myconf(ConfigParser):
    def __init__(self,defaults=None):
        ConfigParser.__init__(self,defaults=None)
    def optionxform(self, optionstr):
        return optionstr