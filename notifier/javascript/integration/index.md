## 接入插件

接入 Fundebug 插件非常简单，将**fundebug.min.js**放在**head**标签中就可以了。

注意，Fundebug 插件必须置于其它脚本之前，这样才能捕获到所有其他 JavaScript 脚本的错误。

```html
<script
    src="https://js.fundebug.cn/fundebug.2.8.4.min.js"
    apikey="API-KEY"
    crossorigin="anonymous"
></script>
```

如果您想保持使用最新版本，可以将上面的src替换为`https://js.fundebug.cn/fundebug.latest.min.js`。

其中，获取**apikey**需要[免费注册](https://www.fundebug.com/team/create)帐号并且[创建项目](https://www.fundebug.com/project/create)，注意选择对应的项目类型。

Fundebug 插件兼容 CommonJS，AMD 以及 CMD 标准，因此也可以使用[NPM](./npm.md)或者[RequireJS](./requirejs.md)接入。

如果有需要的话，也可以[动态加载](./dynamical.md)Fundebug 插件。

### 推荐 NPM 安装方式

Fundebug 插件使用了第三方 CDN 服务进行分发，我们无法保证其稳定性；另外，我们没有使用海外 CDN 服务。因此，我们推荐大家采用 NPM 方式安装。另外，使用 NPM 安装方便对 Fundebug 插件进行版本升级。

### 框架内接入

Fundebug 插件支持监控各种前端框架的错误。如果你使用了如下框架，可以参考具体的接入方法：

-   [Vue.js](../framework/vuejs.md)
-   [React](../framework/react.md)
-   [AngularJS 1](../framework/angularjs1.md)
-   [Angular 2](../framework/angularjs2.md)
-   [Angular 4](../framework/angularjs4.md)
-   [Ionic 1](../framework/ionic1.md)
-   [Ionic 2](../framework/ionic2.md)
-   [Cordova](../framework/cordova.md)
-   [GitBook](../framework/gitbook.md)
