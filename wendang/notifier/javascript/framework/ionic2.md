#### 监控 [Ionic 2](http://ionic.io/2)

**Ionic 2**使用了[Angular 2](https://angular.io/)，因此与其配置方法一致。

##### 1. 安装[fundebug-javascript](https://www.npmjs.com/package/fundebug-javascript)

```bash
npm install fundebug-javascript --save
```

##### 2. 接入插件

修改**src/app/app.module.ts**

```js
import * as fundebug from "fundebug-javascript";
fundebug.apikey = 'API-KEY';

// 定义FundebugErrorHandler
class FundebugErrorHandler implements ErrorHandler {
   handleError(err:any) : void {
     fundebug.notifyError(err);
   }
}

// 将IonicErrorHandler替换为FundebugErrorHandler
@NgModule({
   // 其他代码
   providers: [ { provide: ErrorHandler, useClass: FundebugErrorHandler } ]
 })
```

其中，获取**apikey**需要[免费注册](https://www.fundebug.com/team/create)帐号并且[创建项目](https://www.fundebug.com/project/create)，注意选择对应的项目类型。


##### 参考

- [Inonic文档：IonicErrorHandler](https://ionicframework.com/docs/api/util/IonicErrorHandler/)
- [Angular 2文档：ErrorHandler](https://angular.io/api/core/ErrorHandler)
