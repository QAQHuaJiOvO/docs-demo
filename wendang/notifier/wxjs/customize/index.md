#### 属性配置

用户可以根据需要对以下属性进行个性化配置:

-   [apikey](./apikey.md)
-   [appVersion](./appversion.md)
-   [releaseStage](./releasestage.md)
-   [filters](./filters.md)
-   [silent](./silent.md)
-   [silentHttp](./silenthttp.md)
-   [silentHttpHeader](./silenthttpheader.md)
-   [monitorHttpData](monitorhttpdata.md)
-   [monitorResponse](monitorResponse.md)
-   [silentInject](./silentinject.md)
-   [silentApp](./silentapp.md)
-   [silentPage](./silentpage.md)
-   [sampleRate](./samplerate.md)
-   [monitorMethodCall](monitormethodcall.md)
-   [monitorMethodArguments](monitormethodarguments.md)
-   [methodWhitelist](methodwhitelist.md)
-   [methodBlacklist](methodblacklist.md)
-   [setSystemInfo](setsysteminfo.md)
-   [setUserInfo](setuserinfo.md)
-   [setLocation](setlocation.md)
-   [systemInfo](./systeminfo.md)
-   [userInfo](./userinfo.md)
-   [metaData](metadata.md)
-   [callback](callback.md)
-   [breadcrumbsize](breadcrumbsize.md)

例如，配置 silent 属性:

#### 插件版本 >= 0.6.1

```js
fundebug.init({
    silent: true
});
```

#### 插件版本 <= 0.5.0

```js
fundebug.silent = true;
```
