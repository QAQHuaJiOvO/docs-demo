## setSystemInfo

布尔类型，默认值为 false。

systemInfo 是用户的系统信息，比如操作系统，微信版本等等:

```js
"systemInfo":
{
    "system": "iOS 10.2",
    "model": "iPhone 7",
    "pixelRatio": 2,
    "windowHeight": 603,
    "language": "zh_CN",
    "version": "6.5.3",
    "windowWidth": 375,
    "platform": "ios"
}
```

为了保护用户隐私，**Fundebug 默认情况下不收集 systemInfo**。开发者如果需要收集 systemInfo，需要将**setSystemInfo**属性设为 true:

```js
fundebug.init({
    apikey: "API-KEY",
    setSystemInfo: true
});
```