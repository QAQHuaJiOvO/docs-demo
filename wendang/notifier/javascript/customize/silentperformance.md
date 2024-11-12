## silentPerformance

布尔类型，默认值为 false。

如果你不需要报错的时候附带页面性能指标，则可以将 silentPerformance 属性设为 true。

- 使用[init](../api/init.md)方法配置（推荐）

插件版本 >= 2.0.0

```js
fundebug.init({
    silentPerformance : true
})
```

-   在 HTML 中配置`<script>`标签中配置 silentPerformance 属性

```html
<script
    src="https://js.fundebug.cn/fundebug.2.8.6.min.js"
    apikey="API-KEY"
    silentPerformance="true"
 crossorigin="anonymous" ></script>
```

-   在 JavaScript 中配置 silentPerformance 变量

```javascript
if ("fundebug" in window) {
    fundebug.silentPerformance = true;
}
```
