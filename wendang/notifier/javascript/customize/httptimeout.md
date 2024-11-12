## httpTimeout

Number类型，单位为毫秒(ms)。

如果你希望监控较慢的HTTP请求，则可以通过httpTimeout配置阈值，比如1000：

- 使用[init](../api/init.md)方法配置（推荐）

插件版本 >= 2.0.0

```js
fundebug.init({
    httpTimeout : 1000
})
```

- 通过fundebug配置

```js
if ("fundebug" in window) {
    fundebug.httpTimeout = 1000;
}
```

则所有花费时间超过1000ms的请求都会上报到Fundebug。