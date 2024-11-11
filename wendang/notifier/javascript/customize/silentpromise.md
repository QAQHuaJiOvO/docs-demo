## silentPromise

布尔类型，默认值为 false。

如果你不想监控 Promise 错误，则可以将 silentPromise 属性设为 true。

- 使用[init](../api/init.md)方法配置（推荐）

插件版本 >= 2.0.0

```js
fundebug.init({
  silentPromise: true,
});
```

- 在 HTML 中配置`<script>`标签中配置 silentPromise 属性

```html
<script
  src="https://js.fundebug.cn/fundebug.2.8.6.min.js"
  apikey="API-KEY"
  silentPerformance="true"
  crossorigin="anonymous"
></script>
```

- 在 JavaScript 中配置 silentPromise 变量

```javascript
if ("fundebug" in window) {
  fundebug.silentPromise = true;
}
```
