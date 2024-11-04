## silentConsole

布尔类型，默认值为 false。

Fundebug 插件会调用注入 Console 方法获取打印日志数据。

如果不需要收集的话，可以将 silentConsole 属性设为 true:

```javascript
fundebug.init({
    silentConsole: true
});
```
