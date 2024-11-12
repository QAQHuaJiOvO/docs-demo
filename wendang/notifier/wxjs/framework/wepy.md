#### 监控 [WePy](https://tencent.github.io/wepy/)

##### 1. [接入插件](../integration/npm.md)

在**src/app.wpy**的script标签中接入Fundebug。

另外，无需其他额外配置。

##### 请[使用npm方式接入Fundebug插件](../integration/npm.md)

如果[使用文件直接接入Fundebug](../integration/index.md)的话，wepy build时会开启source map，会在Fundebug插件最后添加sourceMappingURL，导致文件变大。详情请参考[source map可以排除某些文件吗？](https://github.com/Tencent/wepy/issues/1634)。

使用npm方式接入Fundebug插件的话，不存在这个问题。