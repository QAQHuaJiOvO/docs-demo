## monitorHttpResponse

布尔类型，默认值为 false。

为了保护隐私，Fundebug 插件默认不会记录 HTTP 请求的返回数据。
若将**monitorHttpResponse**设为 true，**用户行为**列表中的**HTTP请求行为**会展示返回数据。

注意：插件版本 >= 2.8.4

-   使用[init](../api/init.md)方法配置（推荐）


```js
fundebug.init({
    monitorHttpResponse: true
});
```

-   在 HTML 中配置`<script>`标签中配置 monitorHttpResponse 属性

```html
<script
    src="https://js.fundebug.cn/fundebug.2.8.6.min.js"
    apikey="API-KEY"
    monitorHttpResponse="true"
    crossorigin="anonymous"
></script>
```

-   在 JavaScript 中配置 monitorHttpResponse 变量

```js
if ("fundebug" in window) {
    fundebug.monitorHttpResponse = true;
}
```
