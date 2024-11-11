## silentVideo

布尔类型，默认值为 false。

**注：** **1.0.3**至**1.6.0**[版本](../version.md)的插件支持该属性。**1.7.3**版本插件已经拆分了[录屏插件](../revideo.md)，因此是否录屏取决于是否使用录屏插件，无需配置。

如果你需要录屏功能，则可以将 silentVideo 属性设为 false。silentVideo 的默认值为 true，即默认关闭录屏功能。

-   在 HTML 中配置`<script>`标签中配置 silentVideo 属性

```html
<script src="https://js.fundebug.cn/fundebug.2.8.6.min.js"
            apikey="API-KEY"
            silentVideo=false crossorigin="anonymous" ></script>
```

-   在 JavaScript 中配置 silentVideo 变量

```js
if ("fundebug" in window) {
    fundebug.silentVideo = false;
}
```
