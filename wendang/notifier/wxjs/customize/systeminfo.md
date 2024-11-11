#### systemInfo

**注：** 0.6.1及以上版本的插件不再支持这个属性，请通过配置[setSystemInfo](./setsysteminfo.md)属性来获取systemInfo。

systemInfo是用户的系统信息，比如操作系统，微信版本等等:

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

为了保护用户隐私，**Fundebug默认情况下不收集systemInfo**。开发者如果需要收集systemInfo，需要将**setSystemInfo**属性设为true:

```js
wx.getSystemInfo(
{
    success: function(res)
    {
        fundebug.systemInfo = res;
    }
})
```