## httpTimeout

Number类型，单位为毫秒(ms)。

如果你希望监控较慢的HTTP请求，则可以通过httpTimeout配置阈值，比如1000：

- 使用fundebug的属性配置httpTimeout

```javascript
fundebug.httpTimeout = 1000;
```

- 使用fundebug.config函数配置apikey

```js
fundebug.config(
{
    httpTimeout: 1000
})
```

则所有花费时间超过1000ms的请求都会上报到Fundebug。