## notify(name, message, option, callback)

使用fundebug.notify()，可以将自定义的错误信息发送到Fundebug

**name**: 错误名称，参数类型为字符串 

**message**: 错误信息，参数类型为字符串

**option**: 可选对象，参数类型为对象，用于发送一些额外信息，比如: 

   - user: 用户信息，包含name与email属性
   - metaData: 其他自定义信息

**callback**: 回调函数 

示例：

```js
fundebug.notify("Test", "Hello, Fundebug!")
```

fundebug.notify()上报的错误的类型"notification"，即type属性的值为"notification"。