## setLocation

布尔类型，默认值为 false。

location 是用户的位置信息，比如经度，纬度等:

```javascript
{
    "country": "中国",
     "province": "浙江省",
    "city": "杭州市",
    "district": "西湖区"
}
```

为了保护用户隐私，**Fundebug 默认情况下不收集 location**。开发者如果需要收集 location，需要进行配置:

```js
fundebug.init({
    setLocation: true
});
```
