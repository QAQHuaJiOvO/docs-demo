## notifyError(error, option)

使用notifyError，可以将主动捕获的错误发送到Fundebug

**error**：抛出的错误对象，即[Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)对象。

**option**：可选对象，参数类型为对象，用于发送一些额外信息，比如： 

   - name: 自定义错误名称
   - metaData: 其他自定义信息

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

发送name和metaData：

```js
try 
{
  // 代码
}
catch (err) 
{
    fundebug.notifyError(err,
    {
        name: "支付失败",
        metaData:
        {
            company: "Fundebug",
            location: "厦门"
        }
    });
}
```

fundebug.notifyError()上报的错误的类型"caught"，即type属性的值为"caught"。