## 接入插件

### 1. 安装[fundebug-reactnative](https://www.npmjs.com/package/fundebug-reactnative)模块

```bash
npm install --save fundebug-reactnative
```

### 2. 在 App.js 中接入[fundebug-reactnative](https://www.npmjs.com/package/fundebug-reactnative)模块

```js
var fundebug = require("fundebug-reactnative");
fundebug.init({
    apikey: "API-KEY"
});
```

-   获取**apikey 需要**[免费注册](https://www.fundebug.com/team/create)Fundebug 帐号并且[创建项目](https://www.fundebug.com/project/create)，注意选择对应的项目类型。
