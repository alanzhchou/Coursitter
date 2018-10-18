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
查询所有院系信息|http://www.xxx.com/faculties|
查询所有专业信息|http://www.xxx.com/majors|
查询某院系下的专业信息|http://www.xxx.com/faculty/faculty_name|
查看某专业的培养计划（转换 pdf => 网页）|http://www.xxx.com/major/major_name#basic    </br>http://www.xxx.com/major/major_name#kernel   </br>http://www.xxx.com/major/major_name#elective|(由页面分配 基础 必修 选修)
查看特定课程的信息|http://www.xxx.com/course/course_name|
查询课程是否可选的依赖关系|http://www.xxx.com/checker|
404|http://www.xxx.com/404|
帮助与反馈|http://www.xxx.com/help|

> 4. api设计

需求名称|需求描述|需求接口|接口参数|回调
---|:---:|:---:|:---:|---:
注册账号|根据邮箱(CAS)来注册账号|api/set_info/sign_up|注册所需的邮箱，用户名，密码等|注册是否成功
登陆|根据账号/邮箱登陆|api/get_info/sign_in|登陆用户名/密码|是否成功，将用户token写入cookie
用户信息|获取用户信息|api/get_info/account_infomation|token 信息|根据得到的用户基本信息填充用户信息界面    
用户安全信息|获取用户关于密码的设置|api/get_info/account_safety|token 信息|根据得到的用户密码信息填充用户安全界面
上传头像|根据用户选择上传图像(规定大小内)|/api/set_info/upload_avatar|token 信息,上传图片|是否成功上传,刷新头像
上传修改的用户信息|上传用户修改的信息|/api/set_info/set_account_infomation|token 信息,上传信息|是否成功上传，刷新信息
修改密码|根据用户填写旧密码/新密码修改用户密码|/api/set_info/set_account_safety|用户密码信息|是否修改成功
请求用户所选的所有课程|请求用户信息返回用户所有选修的课程|api/get_info/get_my_courses|token信息|该用户所有选修的课程
请求院系信息|获取院系信息|api/get_info/faculties|无|返回所有院系信息
请求所有专业信息|请求所有专业信息|api/get_info/majors|无|返回所有专业信息
请求某院系下的所有专业信息|请求某院系下的所有专业信息|api/get_info/faculty|faculty名称|返回该院系下的所有专业信息
请求专业下的培养方案课程|请求专业下的培养方案课程|api/get_info/major|token信息, major名称|返回该专业下的所有培养方案课程
请求某个特定课程的信息|请求某个特定课程的信息|api/get_info/course|token信息, course名称|返回该课程的信息
请求是否可以选修|请求是否可以选修某个课程|api/get_info/checker|token信息,课程信息|返回是否可选修及原因

***
***
```
备注：
周恒
2018.10.13
```