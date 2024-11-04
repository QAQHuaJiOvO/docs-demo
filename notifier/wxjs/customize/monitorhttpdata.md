## monitorHttpData

布尔类型，默认值为 false。

出于保护隐私，Fundebug 在监控 HTTP 请求时，不会收集请求的 body(即[wx.request](https://developers.weixin.qq.com/miniprogram/dev/api/network-request.html)的 data 参数)。
注意：HTTP请求包括：HTTP请求错误和用户行为中的HTTP请求记录。

如何你希望收集 HTTP 请求 body 的话，请将 monitorHttpData 属性设为 true。

#### 插件版本 >= 0.6.1

```js
fundebug.init({
    monitorHttpData: true
});
```

#### 插件版本 <= 0.5.0

```js
fundebug.monitorHttpData = true;
```
