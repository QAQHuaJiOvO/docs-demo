## test(name, message)

使用fundebug.test()，可以将测试数据发送到Fundebug。

使用fundebug.test()发送的错误，均会收到报警邮件(每天限额为20封)。

**name**: 错误名称，参数类型为字符串，默认值为"Test"

**message**: 错误信息，参数类型为字符串, 默认值为"Hello, Fundebug!"

示例：

```js
fundebug.test("Test", "Hello, Fundebug!")
```

fundebug.test()上报的错误的类型"test"，即type属性的值为"test"。