#### metaData

metaData是其他自定义信息，开发者可以使用metaData发送所需要的信息。以下两种配置方法都是正确的：

```javascript
fundebug.init(
{
    metaData:
    {
        company:
        {
            name: "Fundebug",
            nation: "China"
        }
    }
})
```