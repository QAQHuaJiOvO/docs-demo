## notify(name, message, option)

使用fundebug.notify()，可以将自定义的错误信息发送到Fundebug

**name**: 错误名称，参数类型为字符串

**message**: 错误信息，参数类型为字符串 

**option**: 可选对象，参数类型为对象，用于发送一些额外信息，比如: 

   - metaData: 其他自定义信息

示例：

```js
fundebug.notify("Test", "Hello, Fundebug!")
```

带metaData

```js
fundebug.notify("Test", "Hello, Fundebug!",
{
    metaData:
    {
        company: "云麒",
        location: "厦门"
    }
})
```

fundebug.notify()上报的错误的类型"notification"，即type属性的值为"notification"。