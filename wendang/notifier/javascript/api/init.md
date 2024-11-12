## init(config)

**2.0.0**及以上版本插件使用init[配置各种属性](../customize/index.md)，例如[apikey](../customize/apikey.md)

```js
fundebug.init({
    apikey: "API-KEY"
});
```

### TypeScript

init方法的TypeScript定义如下：

```js
export function init(config: IConfigs): undefined;

interface IConfigs {
    apikey: string;
    appversion?: string;
    releasestage?: string;
    user?: IUser;
    metaData?: object;
    callback?: ICallback;
    setHttpBody?: boolean;
    httpTimeout?: number;
    filters?: object[];
    silent?: boolean;
    silentDev?: boolean;
    silentResource?: boolean;
    silentHttp?: boolean;
    silentWebsocket?: boolean;
    silentConsole?: boolean;
    silentPerformance?: boolean;
    sampleRate?: number;
    domain?: string;
}
```