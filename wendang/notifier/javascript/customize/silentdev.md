## silentDev

布尔类型，默认值为 false。

**注：** 1.2.0 及以上版本的插件支持该属性。

如果您不需要收集开发环境中的错误，则可以将 silentDev 属性设为 true。这样的话，Fundebug 不会收集开发环境的错误，生产环境的错误仍然会正常收集。注意，我们是通过页面的 URL 来区分生产环境和开发环境的，当 URL 中含有 localhost 或者 IP 时，判断为开发环境，否则判断为生产环境。

- 使用[init](../api/init.md)方法配置（推荐）

插件版本 >= 2.0.0

```js
fundebug.init({
    silentDev : true
})
```

-   在 HTML 中配置`<script>`标签中配置 silentDev 属性

```html
<script src="https://js.fundebug.cn/fundebug.2.8.6.min.js"
            apikey="API-KEY"
            silentDev=true crossorigin="anonymous" ></script>
```

-   在 JavaScript 中配置 silentDev 变量

```js
if ("fundebug" in window) {
    fundebug.silentDev = true;
}
```

当 silentDev 设为 true 时，**Fundebug 不再收集开发环境的错误**。
