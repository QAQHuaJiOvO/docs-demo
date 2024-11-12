####user

user指的是网站的用户，user对象含有name和email两个属性。


 1. 使用fundebug的属性进行配置user

 ```
 fundebug.user = {
     name: "fundebug",
     email: "help@fundebug.com"
 } 
 ```

 2. 使用fundebug.config函数配置user

 ```js
 fundebug.config(
 {
     user: {
     name: "fundebug",
     email: "help@fundebug.com"
 }
 })
 ```