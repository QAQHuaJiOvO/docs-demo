## notify(name, message)

使用fundebug.notify()，可以将自定义的错误信息发送到Fundebug

**name**: 错误名称，参数类型为字符串

**message**: 错误信息，参数类型为字符串 

示例：

```java
fundebug.notify("Test", "Hello, Fundebug!")
```

notify主要用于测试，它发送的错误每次都会报警邮件，这样可能会给您造成困扰。为了避免重复报警，请使用[notifyError](./notifyerror.md)记录错误，这样同一个错误将只会在错误数达到阈值(10, 100, 100...)的时候报警。

fundebug.notify()上报的错误的类型"notification"，即type属性的值为"notification"。