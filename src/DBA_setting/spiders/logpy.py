#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Author: Alan-11510 
# Date: 2018/11/6
# version: 1.0
# python_version: 3.62
import time
import traceback

# log message with time
def log(message):
    try:
        print(time.strftime("%H:%M:%S  %Y-%m-%d(%a %b %d)", time.localtime()),"\t",message)
    except:
        print(traceback.format_exc())

# got a obvious type 'MyFile' hava open,close,write method
class MyFile(object):
    def __init__(self,file_path):
        self.file_path = file_path
        self.file = open("./log/temp_010101",'w')
        self.file.close()
        self.closed = True

    def open(self):
        try:
            self.file = open(self.file_path,mode='a',encoding='utf-8')
            self.closed = False
        except:
            print(traceback.format_exc())

    def write(self,message):
        if self.closed == True:
            self.open()
        try:
            self.file.write(message)
        except:
            print(traceback.format_exc())

    def clear(self):
        try:
            if self.closed == False:
                self.close()
            self.file = open(self.file_path, mode='w', encoding='utf-8')
            self.close()
            self.open()
        except:
            print(traceback.format_exc())

    def close(self):
        try:
            self.file.close()
            self.closed = True
        except:
            print(traceback.format_exc())

# default log path is ./log/log.txt
__log_file = MyFile("./log/log.txt")

# write message to log file
def write(message):
    try:
        log_message = time.strftime("%H:%M:%S  %Y-%m-%d(%a %b %d)", time.localtime()) + "\t" + str(message) + "\n"
        __log_file.write(log_message)
    except:
        print(traceback.format_exc())

# once don't use file anymore, make sure to close it
def close():
    if __log_file.closed == False:
        __log_file.close()

# clear log file, pay attention to use it
def clear_log():
    try:
        __log_file.clear()
    except:
        print(traceback.format_exc())

if __name__ == '__main__':
    log("log test")
    write("log write")
    close()

    write("write after close, please close again")
    close()

    # clear_log()
    # write("write new, please close again")
    # close()

