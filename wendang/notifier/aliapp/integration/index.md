#### 接入插件

##### 1. 下载Fundebug的支付宝小程序插件<a href="https://aliapp.fundebug.cn/fundebug.0.2.0.min.js" >fundebug.0.2.0.min.js</a>

##### 2. 在app.js中引入并配置apikey:

```js
var fundebug = require('./libs/fundebug.0.2.0.min.js')
fundebug.init(
{
    apikey: "API-KEY"
})
```

- `./libs/fundebug.0.2.0.min.js`为相对于app.js的路径 。
- 获取**apikey需要**[免费注册](https://www.fundebug.com/team/create)Fundebug帐号并且[创建项目](https://www.fundebug.com/project/create)，注意选择对应的项目类型。


##### 3. 配置onError

```js
App(
{
    onError(err)
    {
        fundebug.onError(err);
    }
});
```



##### 3. 将aliapp.fundebug.net添加到httpRequest接口请求域名白名单

1. 登陆[支付宝小程序后台](https://open.alipay.com/platform/miniIndex.htm#/)
2. 查看您的小程序
3. 选择右侧『设置』，选择『httpRequest接口请求域名白名单』，点击右侧『添加』，将aliapp.fundebug.net添加到httpRequest接口请求域名白名单。