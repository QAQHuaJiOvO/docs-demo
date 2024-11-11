## silentBehavior

布尔类型，默认值为 false。

**0.7.1 及以上版本插件支持该属性**

如何您不希望记录函数调用、console 打印、HTTP 请求等用户行为，可以将 silentBehavior 属性设为 true:

#### 插件版本 >= 0.7.1

```js
fundebug.init({
    silentBehavior: true
});
```
