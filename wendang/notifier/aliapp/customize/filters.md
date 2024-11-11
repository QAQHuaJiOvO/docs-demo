#### filters

通过配置filters属性，用户可以过滤掉一些不需要捕获的错误，例如：

```js
fundebug.init(
{
    filters: [
    {
        message: /b is not defined/
    }]
})
```

##### 配置规则

filters属性有以下特点：

- 它是一个数组，数组中的元素为**过滤规则**，当错误符合数组中任意一条过滤规则时，则会被过滤
- **过滤规则**是JavaScript对象，该对象的Key为错误的属性名，Value为正则表达式(唯一的特例是"inexistence")；
- 当错误的属性匹配对应正则表达式时，则会被过滤；
- 当过滤规则的属性值为"inexistence"时，则会过滤某个属性不存在的错误；

##### 错误事件示例：


```javascript
{
    "notifierVersion": "0.0.0",
    "apikey": "e9c3a22f94a5f757b4608edd2e87f3ae085a447ee2bde4d1446aa9871ea3ac95",
    "appVersion": "0.1.0",
    "releaseStage": "development",
    "metaData": {
        "name": "test"
    },
    "breadcrumbs": [
        {
            "type": "console",
            "time": 1531293322820,
            "method": "log",
            "args": {
                "0": "Running application \"main\" with appParams: {\"rootTag\":1,\"initialProps\":{\"exp\":{\"manifest\":{\"description\":\"This project is really great.\",\"developer\":{\"projectRoot\":\"/Users/kiwenlau/Desktop/Fundebug/reactnative-notifier\",\"tool\":\"xde\"},\"loadedFromCache\":false,\"orientation\":\"portrait\",\"env\":{},\"platforms\":[\"ios\",\"android\"],\"xde\":true,\"id\":\"@kiwenlau/reactnative-notifier\",\"hostUri\":\"localhost:19000\",\"iconUrl\":\"http://localhost:19001/assets/./assets/icon.png\",\"assetBundlePatterns\":[\"**/*\"],\"mainModuleName\":\"node_modules/expo/AppEntry\",\"sdkVersion\":\"28.0.0\",\"isVerified\":true,\"packagerOpts\":{\"lanType\":\"ip\",\"dev\":true,\"minify\":false,\"urlRandomness\":\"3p-hmx\",\"hostType\":\"tunnel\"},\"ios\":{\"supportsTablet\":true},\"updates\":{\"fallbackToCacheTimeout\":0},\"bundleUrl\":\"http://localhost:19001/node_modules/expo/AppEntry.bundle?platform=ios&dev=true&minify=false&hot=false&assetPlugin=%2FUsers%2Fkiwenlau%2FDesktop%2FFundebug%2Freactnative-notifier%2Fnode_modules%2Fexpo%2Ftools%2FhashAssetFiles\",\"version\":\"1.0.0\",\"debuggerHost\":\"localhost:19001\",\"icon\":\"./assets/icon.png\",\"slug\":\"reactnative-notifier\",\"name\":\"reactnative-notifier\",\"privacy\":\"public\",\"logUrl\":\"http://localhost:19000/logs\",\"splash\":{\"resizeMode\":\"contain\",\"image\":\"./assets/splash.png\",\"backgroundColor\":\"#ffffff\",\"imageUrl\":\"http://localhost:19001/assets/./assets/splash.png\"}},\"initialUri\":\"exp://localhost:19000\",\"appOwnership\":\"expo\",\"shell\":0}}}. __DEV__ === true, development-level warning are ON, performance optimizations are OFF"
            }
        }
    ],
    "time": 1531293323868,
    "type": "uncaught",
    "name": "TypeError",
    "message": "undefined is not an object (evaluating 'b.c')",
    "line": 115833,
    "column": 34,
    "stack": "http://localhost:19001/node_modules/expo/AppEntry.bundle?platform=ios&dev=true&minify=false&hot=false&assetPlugin=%2FUsers%2Fkiwenlau%2FDesktop%2FFundebug%2Freactnative-notifier%2Fnode_modules%2Fexpo%2Ftools%2FhashAssetFiles:115833:34\n_callTimer@http://localhost:19001/node_modules/expo/AppEntry.bundle?platform=ios&dev=true&minify=false&hot=false&assetPlugin=%2FUsers%2Fkiwenlau%2FDesktop%2FFundebug%2Freactnative-notifier%2Fnode_modules%2Fexpo%2Ftools%2FhashAssetFiles:3115:17\ncallTimers@http://localhost:19001/node_modules/expo/AppEntry.bundle?platform=ios&dev=true&minify=false&hot=false&assetPlugin=%2FUsers%2Fkiwenlau%2FDesktop%2FFundebug%2Freactnative-notifier%2Fnode_modules%2Fexpo%2Ftools%2FhashAssetFiles:3322:19\n__callFunction@http://localhost:19001/node_modules/expo/AppEntry.bundle?platform=ios&dev=true&minify=false&hot=false&assetPlugin=%2FUsers%2Fkiwenlau%2FDesktop%2FFundebug%2Freactnative-notifier%2Fnode_modules%2Fexpo%2Ftools%2FhashAssetFiles:2726:49\nhttp://localhost:19001/node_modules/expo/AppEntry.bundle?platform=ios&dev=true&minify=false&hot=false&assetPlugin=%2FUsers%2Fkiwenlau%2FDesktop%2FFundebug%2Freactnative-notifier%2Fnode_modules%2Fexpo%2Ftools%2FhashAssetFiles:2496:31\n__guardSafe@http://localhost:19001/node_modules/expo/AppEntry.bundle?platform=ios&dev=true&minify=false&hot=false&assetPlugin=%2FUsers%2Fkiwenlau%2FDesktop%2FFundebug%2Freactnative-notifier%2Fnode_modules%2Fexpo%2Ftools%2FhashAssetFiles:2688:13\ncallFunctionReturnFlushedQueue@http://localhost:19001/node_modules/expo/AppEntry.bundle?platform=ios&dev=true&minify=false&hot=false&assetPlugin=%2FUsers%2Fkiwenlau%2FDesktop%2FFundebug%2Freactnative-notifier%2Fnode_modules%2Fexpo%2Ftools%2FhashAssetFiles:2495:21\ncallFunctionReturnFlushedQueue@[native code]",
    "sourceURL": "http://localhost:19001/node_modules/expo/AppEntry.bundle?platform=ios&dev=true&minify=false&hot=false&assetPlugin=%2FUsers%2Fkiwenlau%2FDesktop%2FFundebug%2Freactnative-notifier%2Fnode_modules%2Fexpo%2Ftools%2FhashAssetFiles",
    "isFatal": true
}
```


##### 示例1：过滤TypError

```javascript
fundebug.init(
{
    filters: [
    {
        name: /^TypeError$/
    }]
})
```


##### 示例2：配置多条过滤规则


```javascript
fundebug.init(
{
    filters: [
    {
        name: /^ReferenceError$/
    },
    {
        name: /^TypeError$/
        message: /b\.c/
    }]
})
```

