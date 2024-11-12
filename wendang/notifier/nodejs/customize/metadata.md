####metaData

metaData是其他定义信息，开发者可以使用metaData收集所需要的信息。

 1. 使用fundebug的属性进行配置metaData

 ```
 fundebug.metaData = {
         name: "Fundebug",
         nation: "China"
     } 
 ```

 2. 使用fundebug.config函数配置metaData

 ```js
 fundebug.config(
 {
     metaData: {
         name: "Fundebug",
         nation: "China"
     }
 })
 ```