## monitorHttpData

布尔类型，默认值为 false。

出于保护隐私，Fundebug 在监控 HTTP 请求错误时，不会收集请求的 body(即[wx.request](https://developers.weixin.qq.com/minigame/dev/document/network/request/wx.request.html)的 data 参数)。

如何你希望收集 HTTP 请求错误的 body 的话，请将 monitorHttpData 属性设为 true。

```js
fundebug.init({
    apikey: "API-KEY",
    monitorHttpData: true
});
```
