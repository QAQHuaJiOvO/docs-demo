## notifyError(error, option)

使用 notifyError()方法，可以将主动捕获的错误发送到 Fundebug

**error**：抛出的错误对象，参数类型为[Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

**option**：可选对象，参数类型为对象，用于发送一些额外信息，比如：

   <!-- - name: 错误的名字 -->
   <!-- - message: 错误消息 -->
   <!-- - severity: 错误的严重程度， 例如：`error`, `warning`, `notification` -->
   <!-- - user: 用户信息，包含name与email属性 -->

-   metaData: 其他自定义信息

示例：

```js
try {
    // 代码
} catch (err) {
    if ("fundebug" in window) {
        fundebug.notifyError(err);
    }
}
```

发送 metaData：

```js
try {
    // 代码
} catch (err) {
    if ("fundebug" in window) {
        fundebug.notifyError(err, {
            metaData: {
                company: "云麒",
                location: "厦门"
            }
        });
    }
}
```

fundebug.notifyError()上报的错误的类型"caught"，即type属性的值为"caught"。

### TypeScript

notifyError方法的TypeScript定义如下：

```js
export function notifyError(error: Error, options?: IOptions): undefined;

interface IOptions {
    metaData?: object;
}
```