#### methodWhitelist

如果您只需要监控某些特定的自定义函数的调用情况，则可以通过methodWhitelist配置白名单：

#### 插件版本 >= 0.6.1

```js
fundebug.init(
{
    methodWhitelist : ["foo", "bar"]
})
```


#### 插件版本 <= 0.5.0

```js
fundebug.methodWhitelist = ["foo", "bar"];
```

这样，只有methodWhitelist数组中的函数会被监控。

另外，您也可以通过[methodBlacklist](./methodblacklist.md
)配置黑名单。

注意，methodWhitelist的优先级高于methodblacklist，当两者同时配置时，仅白名单生效。