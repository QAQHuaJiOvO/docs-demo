## silentApp

布尔类型，默认值为 false。

Fundebug 插件会调用 getApp 方法获取 App 数据：

```javascript
{
    "globalData": {
        "recharge": "1",
        "score": 3,
        "fundebug": {
            "metaData": {
                "test": "test"
            }
        },
        "message": "Hello, Fundebug!",
        "version": "0.35.50",
        "userInfo": null
    }
}
```

如果不需要收集 App 数据的话，可以将 silentApp 属性设为 true:

```js
fundebug.init({
    silentApp: true
});
```
