####监控[Hapi](https://hapijs.com/)

```js
server.on("request-error", fundebug.HapiErrorHandler);
server.on("response", fundebug.HapiErrorHandler);
```