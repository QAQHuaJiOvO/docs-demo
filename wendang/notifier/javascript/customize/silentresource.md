## silentResource

布尔类型，默认值为 false。

如果你不需要监控[资源加载错误](../type/resource.md)，则可以将 silentResource 属性设为 true。

-   使用[init](../api/init.md)方法配置（推荐）

插件版本 >= 2.0.0

```js
fundebug.init({
    silentResource: true
});
```

-   在 HTML 中配置`<script>`标签中配置 silentResource 属性

```html
<script
    src="https://js.fundebug.cn/fundebug.2.8.6.min.js"
    apikey="API-KEY"
    silentResource="true"
    crossorigin="anonymous"
></script>
```

-   在 JavaScript 中配置 silentResource 变量

```js
if ("fundebug" in window) {
    fundebug.silentResource = true;
}
```
