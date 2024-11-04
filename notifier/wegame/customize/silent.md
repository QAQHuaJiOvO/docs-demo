## silent

布尔类型，默认值为 false。

开发阶段使用 Fundebug 的话，可能会收到过多的错误报警，给开发者带来干扰。这时您可以选择配置安静模式，将 silent 属性设为 true:

```js
fundebug.init({
    apikey: "API-KEY",
    silent: true
});
```

当 silent 设为 true 时，**Fundebug 不再收集任何错误**。
