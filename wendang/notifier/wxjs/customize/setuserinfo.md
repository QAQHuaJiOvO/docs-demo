## setUserInfo

布尔类型，默认值为 false。

**0.6.1 及以上版本插件支持该属性**

userInfo 是用户的系统信息，比如昵称，性别等:

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

为了保护用户隐私，**Fundebug 默认情况下不收集 userInfo**。开发者如果需要收集 userInfo，需要进行配置:

#### 插件版本 >= 0.6.1

```js
fundebug.init({
    setUserInfo: true
});
```

另一种方法是配置[userInfo](./userinfo.md)属性。
