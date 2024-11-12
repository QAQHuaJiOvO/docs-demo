## monitorResponse

布尔类型，默认值为 false。

出于保护隐私，Fundebug 在监控 HTTP 请求时，不会收集请求的返回值Response。
注意：HTTP请求包括：HTTP请求错误和用户行为中的HTTP请求记录。

如何你希望收集 HTTP 请求返回的Response的话，请将 monitorResponse 属性设为 true。

#### 插件版本 >= 1.6.0

```js
fundebug.init({
    monitorResponse: true
});
```
