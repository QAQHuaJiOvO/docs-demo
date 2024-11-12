#### user

user 指的是网站的用户，user 对象含有 name 和 email 两个属性，user 只能在 JavasScript 中配置:

-   使用[init](../api/init.md)方法配置（推荐）

插件版本 >= 2.0.0

```js
fundebug.init({
    user: {
        name: "fundebug",
        email: "help@fundebug.com"
    }
});
```

-   通过 fundebug 配置

```js
if ("fundebug" in window) {
    fundebug.user = {
        name: "fundebug",
        email: "help@fundebug.com"
    };
}
```

目前，user 仅支持配置 name 与 email 属性。
