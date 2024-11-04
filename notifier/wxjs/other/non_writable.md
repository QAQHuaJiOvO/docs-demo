#### write wx is not allowed

当使用小程序插件(例如[微信同声传译](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=&docid=0004aa70d609e099c1d671b2a56009))时，重写App/Page/wx等全局变量被微信禁止(调试基础库2.0.9及以上版本)：

```
[non-writable] write wx is not allowed when using plugins at app.json.
[non-writable] write App is not allowed when using plugins at app.json.
[non-writable] write Page is not allowed when using plugins at app.json.
```

#### 1. 使用0.6.1及以上[版本](../version.md)的Fundebug插件


#### 2. 将**silentInject**设为true。

```js
fundebug.init(
{
    silentInject : true
})
```

#### 3. 使用[notifyError](../api/notifyerror.md)上报onError捕获的错误：

```js
App(
{
    onError: function(err)
    {
        fundebug.notifyError(err);
    }
})
```