## sensitives

数组类型，默认值为空 `[]`

为了保护隐私，Fundebug 插件默认不会记录 HTTP 请求的 body 参数，如果你需要记录 HTTP 请求的 body 参数的话，可以将**monitorHttpBody**设为 true 即可。
为了防止敏感数据暴露，可以配置`sensitives`属性，用于在用户端直接将其过滤。

-   使用[init](../api/init.md)方法配置（推荐）

插件版本 >= 2.8.4

```js
fundebug.init({
    sensitives: ['bankaccount', 'email', 'phoneNumber']
});
```
