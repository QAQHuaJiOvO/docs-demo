## httpTimeout

Number类型，单位为毫秒(ms)。

如果你希望监控较慢的HTTP请求，则可以通过httpTimeout配置阈值，比如1000：

```js
fundebug.init({
    httpTimeout: 1000
});
```

则所有花费时间超过1000ms的请求都会上报到Fundebug。