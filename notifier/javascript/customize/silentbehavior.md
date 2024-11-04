## silentBehavior

布尔类型，默认值为 false。

**注：** **1.0.3**及以上版本的插件支持该属性。

如果你不需要记录用户行为，则可以将 silentBehavior 属性设为 true。

- 使用[init](../api/init.md)方法配置（推荐）

插件版本 >= 2.0.0

```js
fundebug.init({
    silentBehavior : true
})
```

-   在 HTML 中配置`<script>`标签中配置 silentBehavior 属性

```html
<script src="https://js.fundebug.cn/fundebug.2.8.6.min.js"
            apikey="API-KEY"
            silentBehavior=true crossorigin="anonymous" ></script>
```

-   在 JavaScript 中配置 silentBehavior 变量

```js
if ("fundebug" in window) {
    fundebug.silentBehavior = true;
}
```
