## filters

通过配置filters属性，用户可以过滤掉一些不需要捕获的错误，例如：

**插件版本 >= 0.6.1**

```js
fundebug.init(
{
    filters: [
    {
        error: /b is not defined/
    }]
})
```

**插件版本 <= 0.5.0**

```js
fundebug.filters = [
{
    error: /b is not defined/
}]
```

### 配置规则

filters属性有以下特点：

- 它是一个数组，数组中的元素为**过滤规则**，当错误符合数组中任意一条过滤规则时，则会被过滤
- **过滤规则**是JavaScript对象，该对象的Key为错误的属性名，Value为正则表达式(唯一的特例是"inexistence")；
- 当错误的属性匹配对应正则表达式时，则会被过滤；
- 当过滤规则的属性值为"inexistence"时，则会过滤某个属性不存在的错误；

### 错误事件示例：

测试Fundebug时，在微信开发者工具的调试器中，可以在Network中看到发送到**https://fundebug.com/wxjs/**的网络请求，这个请求的body就是我们捕获的错误**事件**：

```
{
    "notifierVersion": "0.4.0",
    "systemInfo":
    {
        "errMsg": "getSystemInfo:ok",
        "model": "iPhone 5",
        "pixelRatio": 2,
        "windowWidth": 320,
        "windowHeight": 504,
        "system": "iOS 10.0.1",
        "language": "zh_CN",
        "version": "6.6.3",
        "screenWidth": 320,
        "screenHeight": 568,
        "SDKVersion": "1.9.91",
        "brand": "devtools",
        "fontSizeSetting": 16,
        "benchmarkLevel": 1,
        "batteryLevel": 100,
        "statusBarHeight": 20,
        "platform": "devtools"
    },
    "apikey": "0abbf8337ed309d1e0337ab47a4e904d2ed2a30fcc18d22efd807f190192e24c",
    "releaseStage": "production",
    "metaData":
    {
        "tier": "free"
    },
    "breadcrumbs": [
    {
        "type": "function",
        "time": 1527556801032,
        "belong": "App",
        "method": "onLaunch",
        "path": "pages/start/start",
        "query":
        {},
        "scene": 1001
    },
    {
        "type": "function",
        "time": 1527556801328,
        "belong": "App",
        "method": "onShow",
        "path": "pages/start/start",
        "query":
        {},
        "scene": 1001
    }],
    "time": 1527556801343,
    "error": "thirdScriptError\nTEST 01;at App lifeCycleMethod onLaunch function\nError: TEST 01\n    at e.onLaunch (http://127.0.0.1:52992/appservice/app.js:19:15)\n    at e._0x4c25b0.(anonymous function) (http://127.0.0.1:52992/appservice/release/fundebug.0.3.1.min.js:192:78)\n    at e.o (http://127.0.0.1:52992/appservice/__dev__/WAService.js:18:19145)\n    at new e (http://127.0.0.1:52992/appservice/__dev__/WAService.js:18:20499)\n    at Function.<anonymous> (http://127.0.0.1:52992/appservice/__dev__/WAService.js:18:20988)\n    at http://127.0.0.1:52992/appservice/__dev__/WAService.js:17:31961\n    at Object._0x27d8dc.(anonymous function) [as bipMe] (http://127.0.0.1:52992/appservice/release/fundebug.0.3.1.min.js:113:12)\n    at App (http://127.0.0.1:52992/appservice/release/fundebug.0.3.1.min.js:358:37)\n    at http://127.0.0.1:52992/appservice/app.js:16:1\n    at require (http://127.0.0.1:52992/appservice/__dev__/WAService.js:18:26712)",
    "type": "uncaught",
    "scene": 1001
};
```

### 配置示例

#### 示例1：过滤ReferenceError的错误

**插件版本 >= 0.6.1**

```js
fundebug.init(
{
    filters: [
    {
        error: /ReferenceError/
    }]
})
```

**插件版本 <= 0.5.0**

```js
fundebug.filters = [
{
    error: /ReferenceError/
}]
```


#### 示例2：不监控发送到example.com的GET请求错误

**插件版本 >= 0.6.1**

```js
fundebug.init(
{
    filters: [
    {
        req:
        {
            url: /example\.com/,
            method: /^GET$/
        }
    }]
})
```

**插件版本 <= 0.5.0**

```js
fundebug.filters = [
{
    req:
    {
        url: /example\.com/,
        method: /^GET$/
    }
}];
```

#### 示例3：过滤statusCode为401的HTTP请求错误

**插件版本 >= 0.6.1**

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

**插件版本 <= 0.5.0**

```js
fundebug.filters = [
{
    res: {
        statusCode: /^401$/
    }
}]
```


#### 示例4：过滤iPhone5上的ReferenceError

**插件版本 >= 0.6.1**

```js
fundebug.init(
{
    filters: [
    {
        error: /^ReferenceError$/,
        systemInfo:
        {
            "model": /^iPhone 5$/,
        }
    }]
})
```

**插件版本 <= 0.5.0**

```js
fundebug.filters = [
{
    error: /^ReferenceError$/,
    systemInfo:
    {
    	"model": /^iPhone 5$/,
    }
}]
```

#### 示例5：配置多条过滤规则

**插件版本 >= 0.6.1**


```js
fundebug.init(
{
    filters: [
    {
        scene: /^1002$/
    },
    {
        error: /TEST 02/,
        scene: /1001/
    }]
})
```

**插件版本 <= 0.5.0**

```js
fundebug.filters = [
{
    scene: /^1002$/
},
{
	error: /TEST 02/,
   scene: /1001/
}];
```

