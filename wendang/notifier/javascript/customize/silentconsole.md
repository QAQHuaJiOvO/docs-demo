## silentConsole

布尔类型，默认值为 false。

**注：** **0.3.6**及以上版本的插件支持该属性。

Fundebug 通过重写 console 对象监控浏览器控制台的打印信息，并添加到用户行为中。这样会导致在控制台下打印的日志无法正确看到原代码文件中的位置：

<img src="../../../images/notifier/other/browser_blackboxing_fundebug/fundebug_catched_console.png" align="center" style="width:61.8%;"><br>

这样会造成开发过程中的困扰，有[3 种不同方法](../other/avoid_disturb_console.md)可以解决这个问题：

-   [配置浏览器 Blackboxing](../other/browser_blackboxing_fundebug.md)
-   接入插件时，将**silentConsole**属性设为 true
-   使用[NPM 安装](../integration/npm.md)时，则在开发环境不接入 Fundebug

如果你不需要记录控制台的打印信息，则可以将 silentConsole 属性设为 true。

- 使用[init](../api/init.md)方法配置（推荐）

插件版本 >= 2.0.0

```js
fundebug.init({
    silentConsole : true
})
```

-   在 HTML 中配置`<script>`标签中配置 silentConsole 属性

```html
<script src="https://js.fundebug.cn/fundebug.2.8.6.min.js"
            apikey="API-KEY"
            silentConsole=true crossorigin="anonymous" ></script>
```

#### 2. 在 JavaScript 中配置 silentConsole 变量

```js
if ("fundebug" in window) {
    fundebug.silentConsole = true;
}
```

采用 fundebug.silentConsole 方式配置的话，需要等到 DOMContentLoaded 才会生效。也就是说，DOMContentLoaded 之前的 console 打印，显示的位置仍然是 fundebug 脚本。
