## silent

布尔类型，默认值为 false。

如果您暂时不需要使用 Fundebug，可以选择配置安静模式，将 silent 属性设为 true。这样的话，Fundebug 不会收集错误信息，因此也不会发送报警邮件。

- 使用[init](../api/init.md)方法配置（推荐）

插件版本 >= 2.0.0

```js
fundebug.init({
    silent : true
})
```

-   在 HTML 中配置`<script>`标签中配置 silent 属性

```html
<script src="https://js.fundebug.cn/fundebug.2.8.6.min.js"
            apikey="API-KEY"
            silent=true crossorigin="anonymous" ></script>
```

-   在 JavaScript 中配置 silent 变量

```js
if ("fundebug" in window) {
    fundebug.silent = true;
}
```

当 silent 设为 true 时，**Fundebug 不再收集任何错误**。
