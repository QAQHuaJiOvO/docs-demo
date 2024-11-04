## notifyError(error, option)

使用 notifyError，可以将主动捕获的错误发送到 Fundebug

**error**：抛出的错误对象，即[Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)对象。

**option**：可选对象，参数类型为对象，用于发送一些额外信息，比如：

-   name: 自定义错误名称
-   metaData: 其他自定义信息

示例：

```js
try {
    // 代码
} catch (err) {
    fundebug.notifyError(err);
}
```

发送 name 和 metaData：

```js
try {
    // 代码
} catch (err) {
    fundebug.notifyError(err, {
        name: "支付失败",
        metaData: {
            company: "Fundebug",
            location: "厦门"
        }
    });
}
```

fundebug.notifyError()上报的错误的类型"caught"，即type属性的值为"caught"。

### 在其他页面使用 fundebug.notifyError 接口

由于 fundebug 并非全局变量，因此 fundebug 需要通过全局**globalData**来共享到其他页面。

首先，在 app.js 中，将 fundebug 设为 globalData 的子属性。

```javascript
App({
    globalData: {
        fundebug: fundebug
    }
});
```

然后，在其他页面通过 globalData 来调用 fundebug.notifyError()

```javascript
var app = getApp();
app.globalData.fundebug.notifyError(new Error("TEST"));
```
