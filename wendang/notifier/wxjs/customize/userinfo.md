#### userInfo

**注：** 0.6.1及以上版本的插件支持通过配置[setUserInfo](./setuserinfo.md)属性来获取userInfo。

userInfo是用户的系统信息，比如昵称，性别等:

```js
"userInfo":
{
    "nickName": "Fundebug",
    "gender": 1,
    "city": "Xiamen",
    "province": "Fujian",
    "avatarUrl": "http://wx.qlogo.cn/mmopen/vi_32/ajNVdqHZLLCBzlbOr9bJ1S4Aj1WAA2jib62y7nAFMBYhfsg2X123ibeIzQQdJvBVlUy0pibz5Xc9pKsgsvsyaHXCA/0"
}
```

为了保护用户隐私，**Fundebug默认情况下不收集userInfo**。开发者如果需要收集userInfo，需要进行配置:

```js
wx.getUserInfo(
{
    success: function(res)
    {
        fundebug.userInfo = res.userInfo;
    }
})
```