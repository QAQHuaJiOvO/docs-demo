## filters

通过配置filters属性，用户可以过滤掉一些不需要捕获的错误，例如：

```js
fundebug.init(
{
    apikey: "API-KEY",
    filters: [
    {
        message: /Cannot read property/
    },
    {
        req:
        {
            method: /^POST$/
        }
    }]
});
```

### 配置规则

filters属性有以下特点：

- 它是一个数组，数组中的元素为**过滤规则**，当错误符合数组中任意一条过滤规则时，则会被过滤
- **过滤规则**是JavaScript对象，该对象的Key为错误的属性名，Value为正则表达式(唯一的特例是"inexistence")；
- 当错误的属性匹配对应正则表达式时，则会被过滤；
- 当过滤规则的属性值为"inexistence"时，则会过滤某个属性不存在的错误；

### 错误事件示例：

测试Fundebug时，在微信开发者工具的调试器中，可以在Network中看到发送到**https://wegame.fundebug.net/event/**的网络请求，这个请求的body就是我们捕获的错误**事件**：

```
{
    "name": "ReferenceError",
    "message": "b is not defined",
    "stack": "ReferenceError: b is not defined\n    at http://127.0.0.1:14988/game/game.js:80:5\n    at require (http://127.0.0.1:14988/game/__dev__/WAGame.js:3:13718)\n    at http://127.0.0.1:14988/game/gamePage.html:149:5",
    "type": "caught",
    "metaData":
    {
        "name": "Fundebug",
        "nation": "China"
    },
    "notifierVersion": "0.2.0",
    "apikey": "95e68fb61776cb5f9e8a610b20d0bdee89b52bddd5b442ddfcc022a2911780f1",
    "releaseStage": "development",
    "appVersion": "3.2.5",
    "systemInfo":
    {
        "errMsg": "getSystemInfo:ok",
        "model": "iPhone 5",
        "pixelRatio": 2,
        "windowWidth": 320,
        "windowHeight": 568,
        "system": "iOS 10.0.1",
        "language": "zh_CN",
        "version": "6.6.3",
        "screenWidth": 320,
        "screenHeight": 568,
        "SDKVersion": "2.0.9",
        "brand": "devtools",
        "fontSizeSetting": 16,
        "benchmarkLevel": 1,
        "batteryLevel": 100,
        "statusBarHeight": 20,
        "platform": "devtools"
    },
    "time": 1528937703693
}
```

### 配置示例


#### 示例1：过滤ReferenceError的错误

```javascript
fundebug.init(
{
    apikey: "API-KEY",
    filters: [
    {
        name: /ReferenceError/
    }]
});
```

#### 示例2：不监控发送到example.com的GET请求错误

```javascript
fundebug.init(
{
    apikey: "API-KEY",
    filters: [
    {
        req:
        {
            url: /example\.com/,
            method: /^GET$/
        }
    }]
});
```

#### 示例3：过滤statusCode为401的HTTP请求错误

```js
fundebug.init(
{
    filters: [
    {
        res: {
            statusCode: /^401$/
        }
    }]
})
```


#### 示例4：过滤iPhone5上的ReferenceError

```javascript
fundebug.init(
{
    apikey: "API-KEY",
    filters: [
    {
        name: /^ReferenceError$/,
        systemInfo:
        {
            "model": /^iPhone 5$/,
        }
    }]
});
```

#### 示例5：配置多条过滤规则

```javascript
fundebug.init(
{
    apikey: "API-KEY",
    filters: [
    {
        scene: /^1002$/
    },
    {
        message: /TEST 02/,
        scene: /1001/
    }]
});s
```

