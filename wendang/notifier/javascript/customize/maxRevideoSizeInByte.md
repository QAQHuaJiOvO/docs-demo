### maxRevideoSizeInByte

**注：** `revideo`插件 **0.7.1**及以上版本的插件才支持该属性。

默认情况下，`revideo`插件将最大可记录的大小为150KB。如果客户的网站页面相对复杂会超过该限制而无法被记录，可以通过配置`maxRevideoSizeInByte`属性来自定义大小。注意：建议最多到500KB。


- 使用[init](../api/init.md)方法配置（推荐）

插件版本 >= 2.0.0

```js
fundebug.init({
    maxRevideoSizeInByte: "300"
})
```

-   在 HTML 中配置`<script>`标签中配置 domain 属性

```html
<script src="https://js.fundebug.cn/fundebug.revideo.0.7.1.min.js"
            maxRevideoSizeInByte="300"</script>
```
