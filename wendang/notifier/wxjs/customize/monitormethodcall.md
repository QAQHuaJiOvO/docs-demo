## monitorMethodCall

布尔类型，默认值为 false。

Fundebug 会监控小程序官方 API 的一些函数(onLoad, onShow)的调用情况，加入到用户行为中。对于用户自定义函数，默认情况下不会监控。如果开发者希望监控小程序中自定义函数的**函数调用**的话，需要配置 monitorMethodCall 属性：

#### 插件版本 >= 0.6.1

```js
fundebug.init({
    monitorMethodCall: true
});
```

#### 插件版本 <= 0.5.0

```js
fundebug.monitorMethodCall = true;
```

为了保护用户隐私，Fundebug 默认情况下不会收集函数调用的参数，如果需要收集参数的话，需要配置[monitorMethodArguments](./monitormethodarguments.md)
