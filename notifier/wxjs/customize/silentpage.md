## silentPage

布尔类型，默认值为 false。

Fundebug 插件会调用 getCurrentPages 方法获取 Page 数据：

```javascript
{
    "route": "pages/index",
    "__viewData__": {
        "delBtnWidth": 51,
        "goodsList": {
            "list": [],
            "noSelect": false,
            "allSelect": true,
            "totalPrice": 0,
            "saveHidden": true
        }
    },
    "data": {
        "__webviewId__": 54,
        "delBtnWidth": 51,
        "goodsList": {
            "list": [],
            "noSelect": false,
            "allSelect": true,
            "totalPrice": 0,
            "saveHidden": true
        }
    },
    "__route__": "pages/shop-cart/index",
    "__wxWebviewId__": 54
}
```

如果不需要收集 Page 数据的话，可以将 silentPage 属性设为 true:

```js
fundebug.init({
    silentPage: true
});
```
