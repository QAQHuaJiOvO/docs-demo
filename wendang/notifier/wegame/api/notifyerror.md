## notifyError(error, option)

**error**：抛出的错误对象，参数类型为[Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

**option**：可选对象，参数类型为对象，用于发送一些额外信息，比如： 
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

发送metaData：

```js
try 
{
  // 代码
}
catch (err) 
{
    fundebug.notifyError(err,
    {
        metaData:
        {
            company: "云麒",
            location: "厦门"
        }
    });
}
```

fundebug.notifyError()上报的错误的类型"caught"，即type属性的值为"caught"。