#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Author: Alan-11510 
# Date: 2018/11/8
# version: 1.0
# python_version: 3.62

import re
import os

import requests


img = requests.get("https://sustc.io/assets/avatars/9anht3trbqaeoare.png")

type_pattern = re.compile(r".*/(\w*)$")

img_type = type_pattern.search(img.headers["Content-type"]).group(1)


index = 0
while os.path.exists(str(index) + "." + str(img_type)):
    index += 1

img_resource = str(index) + "." + str(img_type)

with open(img_resource,mode="wb") as f:
    f.write(img.content)

