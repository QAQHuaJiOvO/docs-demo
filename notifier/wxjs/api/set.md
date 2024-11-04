### set(object)

使用`fundebug.set()`方法配置属性，配置方法和`init`相同。
比如将`silent`设置为`true`，代码如下所示：

```js
fundebug.set({
    silent: true
});
```

注: 
1. 仅**1.5.0**及以上版本插件支持；
2. 不支持使用该方法修改`apikey`，请使用`fundebug.init()`;