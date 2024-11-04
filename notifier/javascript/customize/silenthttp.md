## silentHttp

布尔类型，默认值为 false。

如果你不需要监控[HTTP 请求错误](../type/http.md)，则可以将 silentHttp 属性设为 true。

- 使用[init](../api/init.md)方法配置（推荐）

插件版本 >= 2.0.0

```js
fundebug.init({
  silentHttp: true,
});
```

- 在 HTML 中配置`<script>`标签中配置 silentHttp 属性

```html
<script
  src="https://js.fundebug.cn/fundebug.2.8.6.min.js"
  apikey="API-KEY"
  silentHttp="true"
  crossorigin="anonymous"
></script>
```

- 在 JavaScript 中配置 silentHttp 变量

```js
if ("fundebug" in window) {
  fundebug.silentHttp = true;
}
```
