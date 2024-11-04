## silentPage

布尔类型，默认值为 false。

Fundebug 插件会调用 getCurrentPages 方法获取 Page 数据：

```javascript
{
    "route": "pages/index/index",
    "_viewId": "1556021552987",
    "data": {
        "title": "Alipay"
    }
}
```

如果不需要收集 Page 数据的话，可以将 silentPage 属性设为 true:

```javascript
fundebug.init({
    silentPage: true
});
```
