#### 接入插件

##### 安装[fundebug-ndoejs](https://www.npmjs.com/package/fundebug-nodejs)模块

```bash
npm install fundebug-nodejs
```

若国外的NPM速度太慢的话，可以使用[淘宝NPM镜像](https://npm.taobao.org/)安装:

```bash
npm install fundebug-nodejs --registry=https://registry.npm.taobao.org
```

##### 使用

```js
var fundebug=require("fundebug-nodejs");
fundebug.apikey="API-KEY"
```

其中，获取**apikey**需要[免费注册](https://www.fundebug.com/team/create)帐号并且[创建项目](https://www.fundebug.com/project/create)，注意选择对应的项目类型。