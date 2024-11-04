## notifyError(error, option, callback)

使用notifyError，可以将主动捕获的错误发送到Fundebug

**error**：抛出的错误对象，参数类型为[Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)； 

**option**：可选对象，参数类型为对象，用于发送一些额外信息，比如： 

   - user: 用户信息，包含name与email属性
   - metaData: 其他自定义信息

**callback**: 回调函数 

示例：

```js
try 
{
  // 代码
}
catch (err) 
{
  fundebug.notifyError(err);
}
```

fundebug.notifyError()上报的错误的类型"caught"，即type属性的值为"caught"。