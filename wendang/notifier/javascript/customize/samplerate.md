#### sampleRate

**注：** **0.4.0**及以上版本的插件支持该属性。

Fundebug 的[付费套餐](https://www.fundebug.com/price)主要是根据错误事件数制定的，这是因为每一个发送到我们服务器的事件，都会消耗一定的 CPU、内存、磁盘以及带宽资源，尤其当错误事件数非常大时，会对我们的计算资源造成很大压力。

如果您希望采样收集错误，比如“只收集 30%的错误”，可以将**[sampleRate](https://docs.fundebug.com/notifier/javascript/customize/samplerate.html)**属性设为 0.3。这样的话，您可以选择更加合适套餐。注意，是否收集错误是完全随机的，因此理论上这样可能会导致一些错误不会被收集。

- 使用[init](../api/init.md)方法配置（推荐）

插件版本 >= 2.0.0

```js
fundebug.init({
    sampleRate : 0.3
})
```

-   在 HTML 中配置`<script>`标签中配置 sampleRate 属性

```html
<script src="https://js.fundebug.cn/fundebug.2.8.6.min.js"
            apikey="API-KEY"
            sampleRate=0.3 crossorigin="anonymous" ></script>
```

-   在 JavaScript 中配置 sampleRate 变量

```js
if ("fundebug" in window) {
    fundebug.sampleRate = 0.3;
}
```
