## 接入插件

如果您使用了 mpvue 或者 WePY 小程序等开发框架，则可以采用[npm](./npm.md)方式接入 Fundebug。

### 1. 安装[fundebug-wxjs](https://www.npmjs.com/package/fundebug-wxjs)模块

```bash
npm install --save fundebug-wxjs
```

### 2. 接入[fundebug-wxjs](https://www.npmjs.com/package/fundebug-wxjs)模块

```js
var fundebug = require("fundebug-wxjs");
fundebug.init({
    apikey: "API-KEY"
});
```

-   获取**apikey 需要**[免费注册](https://www.fundebug.com/team/create)帐号并且[创建项目](https://www.fundebug.com/project/create)，注意选择对应的项目类型。

### 3. 将[https://fundebug.com](https://fundebug.com)添加到**request 合法域名**

1. 登陆[微信公众平台](https://mp.weixin.qq.com/)
2. 选择右侧『设置』，选择『开发设置』，翻到『服务器域名』，点击『修改』。将[https://fundebug.com](https://fundebug.com)添加到**request 合法域名**。注意，服务器域名**一个月内只能修改 5 次**。
3. 域名添加成功后，在**微信 web 开发者工具**打开对应小程序项目，选择右侧『项目』，选择『配置信息』，点击『刷新』，即可看到配置好的[https://fundebug.com](https://fundebug.com)域名。