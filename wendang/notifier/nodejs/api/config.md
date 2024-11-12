#### config(option)

使用config函数，可以配置以下属性:

- [apikey](../customize/apikey.md)
- [silent](../customize/silent.md)
- [appVersion](../customize/appversion.md)
- [releaseStage](../customize/releasestage.md)
- [user](../customize/user.md)
- [metaData](../customize/metadata.md)

示例：

```js
fundebug.config(
{
    apikey: "API-KEY",
    slient: false,
    appVersion: "3.2.5",
    releaseStage: "development",
    user:
    {
        name: "fundebug",
        email: "help@fundebug.com"
    },
    metaDta:
    {
        name: "Fundebug",
        nation: "China"
    }
})
```