#### methodBlacklist

如果您不需要监控某些特定的自定义函数的调用情况，则可以通过methodBlacklist配置黑名单：

#### 插件版本 >= 0.6.1

```js
fundebug.init(
{
    methodBlacklist : ["foo", "bar"]
})
```

#### 插件版本 <= 0.5.0

```js
fundebug.methodBlacklist = ["foo", "bar"];
```

这样，methodBlacklist数组中的函数不会被监控。

另外，您也可以通过[methodWhitelist](./methodwhitelist.md
)配置黑名单。

注意，methodWhitelist的优先级高于methodblacklist，当两者同时配置时，仅白名单生效。