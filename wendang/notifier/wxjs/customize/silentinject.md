## silentInject

布尔类型，默认值为 false。

**0.6.1**及以上版本插件支持该属性。

当使用小程序插件(例如[微信同声传译](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=&docid=0004aa70d609e099c1d671b2a56009))时，重写 App/Page/wx 等全局变量被微信禁止(调试基础库 2.0.9 及以上版本)：

```
[non-writable] write wx is not allowed when using plugins at app.json.
[non-writable] write App is not allowed when using plugins at app.json.
[non-writable] write Page is not allowed when using plugins at app.json.
```

这时，请将**silentInject**设为 true。

```js
fundebug.init({
    silentInject: true
});
```

并使用[notifyError](../api/notifyerror.md)上报 onError 捕获的错误：

```js
App({
    onError: function(err) {
        fundebug.notifyError(err);
    }
});
```
