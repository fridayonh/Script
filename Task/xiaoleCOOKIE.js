
//独立COOKIE文件     ck在``里面填写，多账号换行
let xiaoleurlVal= `https://minapp.xqrobot.net/user.php?mod=sign&client=minapp&version=2.7&site=yyq&user_openid=ofGEO5E5Y_fiqCsHfbAo8_SW-BBo&user_lbs=&city=&u=11084`
let xiaoleheaderVal= `{"Cookie":"PHPSESSID=oibauc5bgptnbpfrb4am80eht7","Accept":"*/*","Content-Type":"application/x-www-form-urlencoded","Accept-Encoding":"gzip, deflate, br","Connection":"keep-alive","Host":"minapp.xqrobot.net","Accept-Language":"zh-cn","Content-Length":"9","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.20(0x1700142b) NetType/WIFI Language/zh_CN","Referer":"https://servicewechat.com/wx7d27c26991711f37/103/page-frame.html"}`



let xiaolecookie = {
  xiaoleurlVal: xiaoleurlVal,	
  xiaoleheaderVal: xiaoleheaderVal,  

}

module.exports =  xiaolecookie
