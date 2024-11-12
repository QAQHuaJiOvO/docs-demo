## WebSockect连接错误

若WebSocket后端出现错误时，WebSockect连接错误则有可能出错：

```javascript
var ws = new WebSocket("wss://ap.fundebug.com/api/events/count");
```

Fundebug插件捕获的这个错误之后，开发者将受到报警，然后可以在我们的控制台查看错误详情：

<table>
	<img src="../../../images/notifier/javascript/type/05.png" align="left" style="width:50%;"><br>
</table>


Fundebug插件捕获的错误数据如下：

```javascript
{
    "notifierVersion": "1.5.1",
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36",
    "locale": "zh-CN",
    "url": "http://localhost:3001",
    "title": "TEST",
    "releaseStage": null,
    "time": 1546522748886,
    "type": "websocketError",
    "target": {
        "type": "onerror",
        "url": "wss://ap.fundebug.com/api/events/count",
        "timeStamp": 835.6999999959953
    }
}
```

### [silentWebsocket](../customize/silentwebsocket.md)

如果你不需要监控WebSocket连接错误，则可以将silentWebsocket属性设为true。


```js
if ("fundebug" in window) {
   fundebug.silentWebsocket = true;
}
```