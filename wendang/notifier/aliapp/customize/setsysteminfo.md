## setSystemInfo

布尔类型，默认值为 false。

systemInfo 是用户的系统信息，比如操作系统，支付宝版本等等:

```js
{
    "model": "5",
    "brand": "IPHONE",
    "language": "zh-Hans",
    "version": "10.1.12",
    "storage": "62.42G",
    "currentBattery": "50%",
    "system": "6.0.1",
    "platform": "iPhone"
}
```

为了保护用户隐私，**Fundebug 默认情况下不收集 systemInfo**。开发者如果需要收集 systemInfo，需要将**setSystemInfo**属性设为 true:

```js
fundebug.init({
    setSystemInfo: true
});
```
