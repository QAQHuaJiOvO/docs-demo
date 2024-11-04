### domain

**注：** `revideo`插件 **0.5.0**及以上版本的插件才支持该属性。

默认情况下，`revideo`插件会自动获取当前的`domain`数据，无需配置。

如果网站服务没有直接挂载在域名下，而是某个子路径(比如：不是`https://www.fundebug.com`，而是`https://www.fundebug.com/xxx`)。此时的`domain`是子路径。
插件无法自动识别出来，需要手动配置。

- 使用[init](../api/init.md)方法配置（推荐）

插件版本 >= 2.0.0

```js
fundebug.init({
    domain: "YOUR-SUB-DOMAIN"
})
```

-   在 HTML 中配置`<script>`标签中配置 domain 属性

```html
<script src="https://js.fundebug.cn/fundebug.revideo.0.7.1.min.js"
            domain="YOUR-SUB-DOMAIN"></script>
```

-   在 JavaScript 中配置 domain 变量

```js
if ("fundebug" in window) {
    fundebug.domain = "YOUR-SUB-DOMAIN";
}
```

### 示例

假设 Fundebug 推出在线代码静态分析服务，计划将其放在`https:///www.fundebug.com/static-type-checking/online`下。

那么我们需要配置`domain`属性，录屏功能才能正常工作。

```html
<script src="https://js.fundebug.cn/fundebug.revideo.0.7.1.min.js"
            domain="https:///www.fundebug.com/static-type-checking/online"></script>
```

或者：

```js
if ("fundebug" in window) {
    fundebug.domain = "https:///www.fundebug.com/static-type-checking/online";
}
```
