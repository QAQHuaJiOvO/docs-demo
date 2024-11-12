## breadcrumbSize

备注：插件版本 >= 1.7.4 方可支持

在每一个错误事件的详情页，有一个“用户行为”的标签。用户行为记录了用户点击、用户输入、网络请求、页面跳转、控制台日志等行为数据。
默认的长度为 20 条。

用户可以设置`breadcrumbSize`属性，来配置合理的长度。

```js
fundebug.init({
    breadcrumbSize: 30
});
```