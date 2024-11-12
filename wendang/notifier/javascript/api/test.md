## test(name, message)

使用 fundebug.test() 方法，可以将测试数据发送到 Fundebug

**name**: 测试名称，参数类型为字符串，默认值为"Test"

**message**: 测试信息，参数类型为字符串, 默认值为"Hello, Fundebug!"

示例：

-   不设置 name 与 message

```js
if ("fundebug" in window) {
    fundebug.test();
}
```

-   设置 name 与 message

```js
if ("fundebug" in window) {
    fundebug.test("Test", "Hello, Fundebug!");
}
```

fundebug.test()上报的错误的类型"test"，即type属性的值为"test"。

### 报警规则

fundebug.test()方法用于测试，它发送的数据每次都会发送报警，每天报警次数限额为 20 次。

为了避免重复报警，请使用[notifyError](./notifyerror.md)或者[notify](./notify.md)记录错误，这样同一个错误将只会在错误数达到阈值(10, 100, 100...)的时候报警。

### TypeScript

test方法的TypeScript定义如下：

```js
export function test(name?: string, message?: string): undefined;
```