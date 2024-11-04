## leaveBreadcrumb(obj)

使用 fundebug.leaveBreadcrumb()方法，发送自定义的用户行为记录。

**obj**: 一个键值对(key-value)对象

示例：

```js
fundebug.leaveBreadcrumb({
    message: "调用fetchData()接口",
    page: "商品详情页面"
});
```

### TypeScript

leaveBreadcrumb 方法的 TypeScript 定义如下

```js
export function leaveBreadcrumb(obj: object): undefined;
```
