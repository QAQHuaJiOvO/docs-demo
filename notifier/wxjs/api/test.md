## test(name, message)

使用 fundebug.test()方法可以用于测试，可以发送测试数据到Fundebug。

**name**: 错误名称，参数类型为字符串，默认值为"Test"

**message**: 错误信息，参数类型为字符串，默认值为"Hello, Fundebug!"

示例 1 ： 没有参数

```js
fundebug.test();
```

示例 2 ： 带参数

```js
fundebug.test("Hello", "This is a Test");
```

fundebug.test()上报的错误的类型"test"，即type属性的值为"test"。

### 关于报警

fundebug.test() 主要用于测试，它发送的错误每次都会报警邮件（每天的限额是 20 封），这样可能会给您造成困扰。为了避免重复报警，请使用其他 API 记录错误，这样同一个错误将只会在错误数达到阈值(10, 100, 100...)的时候报警。

-   [notify](./notify.md)
-   [notifyError](./notifyerror.md)
-   [notifyHttpError](./notifyhttperror.md)
