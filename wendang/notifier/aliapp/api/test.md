### test(name, message)

fundebug.test()主要用于测试，可以将测试数据发送到Fundebug，并受到报警邮件。

**name**: 错误名称，参数类型为字符串

**message**: 错误信息，参数类型为字符串 

示例：

```js
fundebug.test()
```

```js
fundebug.test("Test", "Hello, Fundebug!")
```

fundebug.test() 主要用于测试，它发送的错误每次都会报警邮件（每天的限额是 20 封），这样可能会给您造成困扰。为了避免重复报警，请使用其他 API 记录错误，这样同一个错误将只会在错误数达到阈值(10, 100, 100...)的时候报警。

- [notify](./notify.md)
- [notifyError](./notifyerror.md)

fundebug.test()上报的错误的类型"test"，即type属性的值为"test"。