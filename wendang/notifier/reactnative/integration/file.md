#### 接入插件

#####1. 下载Fundebug的React Native插件<a href="https://reactnative.fundebug.cn/fundebug.0.1.0.min.js" >fundebug.0.1.0.min.js</a>

#####2. 在App.js中引入并配置apikey:

```js
var fundebug = require('./libs/fundebug.0.1.0.min.js')
fundebug.init(
{
    apikey: "API-KEY"
})
```

- `./libs/fundebug.0.1.0.min.js`为相对于App.js的路径 。
- 获取**apikey需要**[免费注册](https://www.fundebug.com/team/create)Fundebug帐号并且[创建项目](https://www.fundebug.com/project/create)，注意选择对应的项目类型。



