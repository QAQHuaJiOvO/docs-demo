#### releasestage

releasestage指的是应用开发阶段，例如『开发』、『测试』、『生产』:

- development
- test
- production

除了这3个常见的取值，releasestage可以设为任意值，可以根据需要进行配置。

默认情况下，Fundebug会自动识别releasestage。用户也可以通过设置releasestage以区分不同阶段的错误。

- 使用[init](../api/init.md)方法配置（推荐）

插件版本 >= 2.0.0

```js
fundebug.init({
    releasestage : "development"
})
```

- 在HTML中配置`<script>`标签中配置releasestage属性

```html
<script src="https://js.fundebug.cn/fundebug.2.8.6.min.js" 
            apikey="API-KEY" 
            releasestage="development" crossorigin="anonymous" ></script>
```

- 在JavaScript中配置releasestage变量

```js
if ("fundebug" in window) {
    fundebug.releasestage = "development"; 
}
```