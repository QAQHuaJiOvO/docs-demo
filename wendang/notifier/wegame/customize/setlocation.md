## setLocation

布尔类型，默认值为 false。

location 是用户的位置信息，比如经度，纬度等:

```js
"location" : {
		"latitude" : 24.57591,
		"longitude" : 118.09728,
		"speed" : -1,
		"altitude" : 0
}
```

为了保护用户隐私，**Fundebug 默认情况下不收集 location**。开发者如果需要收集 location，需要进行配置:

```js
fundebug.init({
    apikey: "API-KEY",
    setLocation: true
});
```
