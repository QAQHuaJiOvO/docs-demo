## silentHttpHeader

布尔类型，默认值为 false。

如果你不希望监控 HTTP 请求错误的 Header 的话，可以将 silentHttpHeader 属性设为 true:

```js
fundebug.init({
    silentHttpHeader: true
});
```
