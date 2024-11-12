## 属性配置

用户可以根据需要对以下属性进行个性化配置:

- [apikey](./apikey.md)
- [silent](./silent.md)
- [appVersion](./appversion.md)
- [releaseStage](./releasestage.md)
- [httpTimeout](./httptimeout.md)
- [user](./user.md)
- [metaData](./metadata.md)

我们提供两种不同的配置方法。例如，配置apikey属性:

 1. 使用fundebug的属性进行配置

 ```js
 fundebug.apikey = "API-KEY" 
 ```

 2. 使用fundebug.config函数进行配置

 ```js
 fundebug.config(
 {
     apikey: "API-KEY"
 })
 ```