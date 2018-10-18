## coursitter 网站的url 及 api 设计
*author ： 周恒*
*date ： 2018.10.13*

***

> 1. 原则
```
1. 应用 前后端分离开发
    - 前端只 设计网页 及 所有请求（设置所有请求函数及回调）
    - 后端只 设计接口
    - 前后端 通过 json 交互， 填充网页 及 满足响应
2. REST风格
    - 尽量避免url传参
    - 合理分配全站 url
3. 易用性
    - 合理的取名 使 url 和 api 使用人性化
    - 保留二次开发可能性
4. 维护此设计提交文档
```

> 2. 路由图

![]()

> 3. url分配

域名为www.xxx.com

页面名称|url|备注
---|:---:|---:
首页|http://www.xxx.com|
注册/登陆|http://www.xxx.com/sign#sign_in                                        </br>http://www.xxx.com/sign#sign_up|由页面分配sign in / sign up 组件                                              </br> 登陆后,将 用户 识别码token储存                                           在 cookie 中 后台通过token 反推 用户
个人信息页|http://www.xxx.com/account#infomation                                  </br>http://www.xxx.com/account#safety|由页面分配infomation / safety 组件
查询个人所有课程修读情况(按修读时间 / 课程代码 排序)|http://www.xxx.com/mycourses|
查询所有院系信息|http://www.xxx.com/allfaculties|
查询所有专业信息|http://www.xxx.com/allmajors|
查询某院系下的专业信息|http://www.xxx.com/faculty_name/majors|
查看某专业的培养计划（转换 pdf => 网页）|http://www.xxx.com/faculty_name/major_name/allcourses#basic    </br>http://www.xxx.com/faculty_name/major_name/allcourses#kernel   </br>http://www.xxx.com/faculty_name/major_name/allcourses#elective|(由页面分配 基础 必修 选修)
查看特定课程的信息|http://www.xxx.com/faculty_name/major_name/course_name|
查询课程是否可选的依赖关系|http://www.xxx.com/checker|
404|http://www.xxx.com/404|
帮助与反馈|http://www.xxx.com/help|

> 4. api设计

需求名称|需求描述|需求接口|接口参数
---|:---:|:---:|---:
111|222|333|
111|222|333|
111|222|333|    
111|222|333|
111|222|333|

***
***
```
备注：
周恒
2018.10.13
```