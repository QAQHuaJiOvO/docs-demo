####监控 [Angular 4](https://angular.io/)

##### 1. 安装[fundebug-javascript](https://www.npmjs.com/package/fundebug-javascript)

```bash
npm install fundebug-javascript --save
```

##### 2. 接入插件

修改**app.module.ts**

```js
import { ErrorHandler } from '@angular/core';
import * as fundebug from "fundebug-javascript";
fundebug.apikey = 'API-KEY';

// 定义FundebugErrorHandler
export class FundebugErrorHandler implements ErrorHandler {
   handleError(err:any) : void {
     fundebug.notifyError(err);
   }
}

// 使用FundebugErrorHandler
@NgModule({
   // 其他代码
   providers: [ { provide: ErrorHandler, useClass: FundebugErrorHandler } ]
 })
```

其中，获取**apikey**需要[免费注册](https://www.fundebug.com/team/create)帐号并且[创建项目](https://www.fundebug.com/project/create)，注意选择对应的项目类型。

注意：定义`FundebugErrorHandler`的代码必须要放在`@Ngmodule`之前，否则会出现白屏，接入失败。

##### 3. 过滤 status 为 0 的 HTTP 上报

由于 Angular 自带框架提供的 HTTPClient 会导致 Fundebug 捕获的所有 HTTP 请求的 status 为 0，为了防止误报，建议在插件配置的时候把 status 为 0 的上报过滤。
配置方法如下：

```js
fundebug.init({
    apikey: "YOUR-API-KEY",
    filters: [
        {
            res: {
                status: /^0$/,
            },
        },
    ],
});
```

##### 参考

-   [Angular 文档：ErrorHandler](https://angular.io/api/core/ErrorHandler)

<br>

##### SystemJS

如果您使用 SystemJS, 那么需要为`fundebug-javascript`配置相应的路径才能成功。

```js
System.config({
    paths: {
        // paths serve as alias
        "npm:": "node_modules/",
    },
    // map tells the System loader where to look for things
    map: {
        /* ... 其他配置 ...*/

        // other libraries
        /* ... 其他配置 ...*/
        "fundebug-javascript":
            "npm:fundebug-javascript/release/fundebug.x.x.x.min.js",
    },
});
```

注意: **fundebug.x.x.x.min.js**中的**x.x.x**要改为插件的版本号，例如**fundebug.0.3.1.min.js**。
