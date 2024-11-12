#### callback(event)

callback 是回调函数，只能在 JavasScript 中配置:

-   使用[init](../api/init.md)方法配置（推荐）

插件版本 >= 2.0.0

```js
fundebug.init({
    callback: function(event) {
        console.log(event);
    }
});
```

-   通过 fundebug 配置

```js
if ("fundebug" in window) {
    fundebug.callback = function(event) {
        console.log(event);
    };
}
```

其中 event 为上报到 Fundebug 服务器的错误数据，需要的话，您可以使用 callback 函数来查看错误数据，也可以将其发送到其他数据平台。
