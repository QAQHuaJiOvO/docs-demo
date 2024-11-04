## silent

布尔类型，默认值为 false。

如果您暂时不需要使用 Fundebug，可以选择配置安静模式，将 silent 属性设为 true。这样的话，Fundebug 不会收集错误信息，因此也不会发送报警邮件。

1.  使用 fundebug 的属性进行配置 silent

```js
fundebug.silent = true;
```

2.  使用 fundebug.config 函数配置 silent

```js
fundebug.config({
    silent: true
});
```

当 silent 设为 true 时，**Fundebug 不再收集任何错误**。
