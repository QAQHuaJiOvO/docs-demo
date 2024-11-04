## monitorMethodArguments

布尔类型，默认值为 false。

开发者如果希望监控小程序中的**函数调用**的参数的话，需要配置 monitorMethodCall 属性：

#### 插件版本 >= 0.6.1

```js
fundebug.init({
    monitorMethodArguments: true
});
```

#### 插件版本 <= 0.5.0

```js
fundebug.monitorMethodArguments = true;
```

注意，Fundebug 默认情况下并不会监控用户自定义函数的调用情况，需要配置[monitorMethodCall](./monitormethodcall.md)。
