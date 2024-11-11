## notify(name, message, option)

使用 fundebug.notify()方法，可以将自定义的错误信息发送到 Fundebug

**name**: 错误名称，参数类型为字符串

**message**: 错误信息，参数类型为字符串

**option**: 可选对象，参数类型为对象，用于发送一些额外信息，比如:

   <!-- - severity: 错误的严重程度，例如：`error`，`warning`，`notification` -->
   <!-- - user: 用户信息，包含name与email属性 -->

-   metaData: 其他自定义信息

示例：

-   不带 metaData

```js
if ("fundebug" in window) {
    fundebug.notify("Test", "Hello, Fundebug!");
}
```

-   带 metaData

```js
if ("fundebug" in window) {
    fundebug.notify("Test", "Hello, Fundebug!", {
        metaData: {
            company: "云麒",
            location: "厦门"
        }
    });
}
```

fundebug.notify()上报的错误的类型"notification"，即type属性的值为"notification"。

### TypeScript

notify方法的TypeScript定义如下：

```js
export function notify(
    name: string,
    message: string,
    options?: IOptions
): undefined;

interface IOptions {
    metaData?: object;
}
```