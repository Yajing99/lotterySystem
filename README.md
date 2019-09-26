# lotterySystem

抽奖系统是一款概率设计的小游戏系统，分为抽奖页面、抽奖算法、人员信息维护页面、系统管理四部分组成。
1.系统包括抽奖，待抽奖人员信息维护，和鉴权三个功能。
2.抽奖功能，在待抽奖人员中随机抽奖，并合理展现获奖信息；待抽奖人员信息维护可进行增删改查操作，人员信息属性要全； 系统管理功能主要是进行待抽奖人员信息的维护工作。
3.该系统的待抽奖人员信息通过管理员维护。
4.人员信息包括姓名、手机号。
5.在抽奖过程中，中将信息可通过页面选择显示中将人姓名或是手机号，且已中将的人员不再参与抽奖。

这里仅用react框架实现了前端代码，搭建了一个简单小型抽奖系统。首先进入登录页面，在这里我在public文件中写了一个模拟ajax接口的.json文件。登录有两个号，一个是管理员的号：用户名'guanliyuan'，密码'guanliyuan'; 另一个是人事系统的号：用户名'renshixitong'，密码'renshixitong'。通过管理员的号可进入抽奖页面，并且通过抽奖页面可进入抽奖人员名单页面；通过人事系统的号可进入中奖人员名单页面查看完整中奖人员名单。

下面演示的是登录管理员账号进行抽奖：
![image](https://github.com/Yajing99/lotterySystem/blob/master/img/load.gif)

下面演示的对抽奖人员进行增加和删除操作：
![image](https://github.com/Yajing99/lotterySystem/blob/master/img/add-delete.gif)

下面演示的是登录人事系统账号查看完整中奖名单：
![image](https://github.com/Yajing99/lotterySystem/blob/master/img/check.gif)

6月11日更新：
刚刚用原生node实现了从MySQL数据库表中得到数据并返回给前端的ajax接口接收。
我只实现了前端接收数据代码在rouserver.js中。
前端接收ajax接口分别用url:3000/login和url:3000/lotteryPeople即可。
