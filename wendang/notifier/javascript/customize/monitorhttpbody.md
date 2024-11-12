## monitorHttpBody

布尔类型，默认值为 false。

为了保护隐私，Fundebug 插件默认不会记录 HTTP 请求的 body 参数，如果你需要记录 HTTP 请求的 body 参数的话，可以将**monitorHttpBody**设为 true 即可。
若将**monitorHttpBody**设为 true，**用户行为**列表中的**HTTP请求行为**会展示请求body的数据。

-   使用[init](../api/init.md)方法配置（推荐）

插件版本 >= 2.8.4

```js
fundebug.init({
    monitorHttpBody: true
});
```

-   在 HTML 中配置`<script>`标签中配置 monitorHttpBody 属性

```html
<script
    src="https://js.fundebug.cn/fundebug.2.8.6.min.js"
    apikey="API-KEY"
    monitorHttpBody="true"
    crossorigin="anonymous"
></script>
```

-   在 JavaScript 中配置 monitorHttpBody 变量

```js
if ("fundebug" in window) {
    fundebug.monitorHttpBody = true;
}
```

当 monitorHttpBody 设为 true 时，**Fundebug 将会收集 HTTP 请求的 body 参数，并过滤掉 password 等隐私数据**。

- 注意：若插件版本 > 2.0.0 且<2.8.4，请使用setHttpBody来配置