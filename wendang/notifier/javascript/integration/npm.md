#### NPM

##### 安装[fundebug-javascript](https://www.npmjs.com/package/fundebug-javascript)模块

```js
npm install fundebug-javascript
```

若国外的NPM速度太慢的话，可以使用淘宝NPM镜像安装:

```bash
npm install fundebug-javascript --registry=https://registry.npm.taobao.org
```

##### 使用

```js
var fundebug=require("fundebug-javascript");
fundebug.init({
    apikey: "API-KEY"
})
```

其中，获取**apikey**需要[免费注册](https://www.fundebug.com/team/create)帐号并且[创建项目](https://www.fundebug.com/project/create)，注意选择对应的项目类型。

另外，浏览器并不支持**CommonJS**规范，因此需要使用[Browserify](http://browserify.org/)或者[Webpack](https://webpack.github.io/)等工具进行打包。

#### 推荐NPM安装方式

Fundebug插件使用了第三方CDN服务进行分发，我们无法保证其稳定性，因此我们推荐大家采用NPM方式安装。另外，使用NPM安装方便对Fundebug插件进行版本升级。