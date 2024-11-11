## silentHttp

布尔类型，默认值为 false。

如果你不希望监控 HTTP 请求错误的话，可以将 silentHttp 属性设为 true:

#### 插件版本 >= 0.6.1

```js
fundebug.init({
    silentHttp: true
});
```

#### 插件版本 <= 0.5.0

```js
fundebug.silentHttp = true;
```
