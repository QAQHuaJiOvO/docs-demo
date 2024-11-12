## 监控[Express](http://expressjs.com/zh-cn/)


#### 监控HTTP请求错误

```js
app.use(fundebug.ExpressErrorHandler);
```

Fundebug的错误处理中间件**ExpressErrorHandler**必须放在其他中间件之后。

### 监控HTTP慢请求

```js
fundebug.httpTimeout = 1000;
app.use(fundebug.ExpressTimeoutHandler());
```

Fundebug的慢请求监控中间件**ExpressTimeoutHandler**必须放在其他中间件之前。
