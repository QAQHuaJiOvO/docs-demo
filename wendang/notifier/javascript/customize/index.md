#### 属性配置

用户可以根据需要对以下属性进行个性化配置:

- [apikey](./apikey.md)
- [appversion](./appversion.md)
- [releaseStage](./releasestage.md)
- [user](./user.md)
- [metaData](metadata.md)
- [callback](callback.md)
- [monitorHttpBody](./monitorhttpbody.md)
- [sensitives](./sensitives.md)
- [monitorHttpResponse](./monitorHttpResponse.md)
- [httpTimeout](./httptimeout.md)
- [filters](./filters.md)
- [breadCrumbsize](./breadcrumbsize.md)
- [silent](./silent.md)
- [silentDev](./silentdev.md)
- [silentResource](./silentresource.md)
- [silentHttp](./silenthttp.md)
- [silentWebsocket](./silentwebsocket.md)
- [silentVideo](./silentvideo.md)
- [silentBehavior](./silentbehavior.md)
- [silentConsole](./silentconsole.md)
- [silentPerformance](./silentperformance.md)
- [silentPromise](./silentproise.md)
- [sampleRate](./samplerate.md)
- [domain](./domain.md)
- [maxRevideoSizeInByte](./maxRevideoSizeInByte.md)
- [maxEventNumber](./maxEventNumber.md)

我们提供 3 种不同的配置方法。例如，配置 apikey 属性:

- 使用[init](../api/init.md)方法配置（推荐）

插件版本 >= 2.0.0

```js
fundebug.init({
  apikey: "API-KEY",
});
```

- 在 HTML 中配置`<script>`标签中配置 apikey 属性

```html
<script
  src="https://js.fundebug.cn/fundebug.2.8.6.min.js"
  apikey="API-KEY"
  crossorigin="anonymous"
></script>
```

- 在 JavaScript 中配置 apikey 变量

```js
if ("fundebug" in window) {
  fundebug.apikey = "API-KEY";
}
```
