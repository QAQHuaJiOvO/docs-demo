## notify(name, message, option)

使用 fundebug.notify()，可以将自定义的错误信息发送到 Fundebug

**name**: 错误名称，参数类型为字符串

**message**: 错误信息，参数类型为字符串

**option**: 可选对象，参数类型为对象，用于发送一些额外信息，比如:

-   metaData: 其他自定义信息

示例：

```js
fundebug.notify("Test", "Hello, Fundebug!");
```

带 metaData

```js
fundebug.notify("Test", "Hello, Fundebug!", {
    metaData: {
        company: "云麒",
        location: "厦门"
    }
});
```

fundebug.notify()上报的错误的类型"notification"，即type属性的值为"notification"。

### 在其他页面使用 fundebug.notify 接口

由于 fundebug 并非全局变量，因此 fundebug 需要通过全局**globalData**来共享到其他页面。

首先，在 app.js 中，将 fundebug 设为 globalData 的子属性。

```javascript
App({
    globalData: {
        fundebug: fundebug
    }
});
```

然后，在其他页面通过 globalData 来调用 fundebug.notify()

```javascript
var app = getApp();
app.globalData.fundebug.notify("TEST", "Hello, Fundebug!");
```
