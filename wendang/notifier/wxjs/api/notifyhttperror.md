## notifyHttpError(req, res, option)

使用 notifyHttpError，可以将 HTTP 请求错误发送到 Fundebug

**req**: HTTP 请求参数，参数类型为 Object，其子属性与[wx.request](https://developers.weixin.qq.com/miniprogram/dev/api/wx.request.html)的请求参数一致，如下：

-   method
-   url
-   data
-   header
-   dataType
-   responseType

**res**: HTTP 返回参数，参数类型为 Object，其子属性与[wx.request](https://developers.weixin.qq.com/miniprogram/dev/api/wx.request.html)的返回参数一致，如下：

-   statusCode
-   errMsg
-   data
-   header

**option**: 可选对象，参数类型为 Object，用于发送一些额外信息，比如:

-   metaData: 其他自定义信息

示例：

```js
wx.request({
    method: "POST",
    url: "https://example.com/create",
    data: {
        test: "test"
    },
    success(res) {
        fundebug.notifyHttpError(
            {
                method: "POST",
                url: "https://example.com/create"
            },
            res
        );
    },
    fail(res) {
        fundebug.notifyHttpError(
            {
                method: "POST",
                url: "https://example.com/create"
            },
            res
        );
    }
});
```

fundebug.notifyHttpError()上报的错误的类型"httpError"，即type属性的值为"httpError"。

### 在其他页面使用 fundebug.notifyHttpError 接口

由于 fundebug 并非全局变量，因此 fundebug 需要通过全局**globalData**来共享到其他页面。

首先，在 app.js 中，将 fundebug 设为 globalData 的子属性。

```javascript
App({
    globalData: {
        fundebug: fundebug
    }
});
```

然后，在其他页面通过 globalData 来调用 fundebug.notifyHttpError()

```javascript
var app = getApp();
app.globalData.fundebug.notifyHttpError(
    {
        method: "POST",
        url: "https://example.com/create"
    },
    {
        statusCode: 401
    }
);
```
