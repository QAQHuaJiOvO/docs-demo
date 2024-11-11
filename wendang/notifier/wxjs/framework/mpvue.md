## 监控 [mpvue](http://mpvue.com/)

可以参考我们的 Demo 项目：[fundebug-mpvue-demo](https://github.com/Fundebug/fundebug-mpvue-demo)

### 1. 安装[fundebug-wxjs](https://www.npmjs.com/package/fundebug-wxjs)模块

```bash
npm install --save fundebug-wxjs
```

### 2. 在**main.js**中接入[fundebug-wxjs](https://www.npmjs.com/package/fundebug-wxjs)模块

```js
var fundebug = require("fundebug-wxjs");
fundebug.init({
    apikey: "apikey"
});
```

-   获取**apikey 需要**[免费注册](https://www.fundebug.com/team/create)帐号并且[创建项目](https://www.fundebug.com/project/create)，注意选择对应的项目类型。

### 3. 在**App.vue**中配置 onError

```js
export default {
    onError(err) {
        var fundebug = require("fundebug-wxjs");
        fundebug.notifyError(err);
    }
};
```

### 4. 将[https://fundebug.com](https://fundebug.com)添加到**request 合法域名**

1. 登陆[微信公众平台](https://mp.weixin.qq.com/)
2. 选择右侧『设置』，选择『开发设置』，翻到『服务器域名』，点击『修改』。将[https://fundebug.com](https://fundebug.com)添加到**request 合法域名**。注意，服务器域名**一个月内只能修改 5 次**。
3. 域名添加成功后，在**微信开发者工具**打开对应小程序项目，选择右侧『项目』，选择『配置信息』，点击『刷新』，即可看到配置好的[https://fundebug.com](https://fundebug.com)域名。
