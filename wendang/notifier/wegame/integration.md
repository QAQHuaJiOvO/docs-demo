#### 接入插件

#####1. 下载Fundebug微信小游戏插件<a href="https://wegame.fundebug.cn/fundebug.0.5.0.min.js" download>fundebug.0.5.0.min.js</a>

微信小游戏不支持导入外部JavaScript文件，因此需要手动下载，然后放到项目目录内。

#####2. 在`game.js`中引入并配置`apikey`:

```js
var fundebug = require('./libs/fundebug.0.5.0.min.js')
fundebug.init({
  apikey: "API-KEY"
});
```

- `./libs/fundebug.0.5.0.min.js`为相对于`game.js`的路径 。
- 获取**apikey需要**[免费注册](https://www.fundebug.com/team/create)帐号并且[创建项目](https://www.fundebug.com/project/create)，注意选择对应的项目类型。创建项目时，请选择"微信小游戏"。

#####3. 将[https://wegame.fundebug.net](https://wegame.fundebug.net)添加到**request合法域名**

1. 登陆[微信公众平台](https://mp.weixin.qq.com/)
2. 选择右侧『设置』，选择『开发设置』，翻到『服务器域名』，点击『修改』。将[https://wegame.fundebug.net](https://wegame.fundebug.net)添加到**request合法域名**。注意，服务器域名**一个月内只能修改5次**。
3. 域名添加成功后，在**微信web开发者工具**打开对应小程序项目，选择右侧『项目』，选择『配置信息』，点击『刷新』，即可看到配置好的[https://wegame.fundebug.net](https://wegame.fundebug.net)域名。


