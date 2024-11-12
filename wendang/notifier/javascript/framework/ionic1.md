#### 监控 [Ionic 1](http://ionicframework.com/docs/v1/)

**Ionic 1**使用了[AngularJS 1](https://angularjs.org/)，因此与其配置方法一致。

##### 1. [接入插件](../integration/index.md)

修改**www/index.html**，将**fundebug.min.js**放在**head**标签中；也可以使用[NPM](../integration/npm.md)、[RequireJS](../integration/requirejs.md)、[动态加载](../integration/dynamical.md)等其他方式接入。

##### 2. 配置exceptionHandler

修改**www/js/app.js**

```js
// 在exceptionHandler中调用fundebug.notifyError
angular
  .module('exceptionOverwrite', [])
  .factory('$exceptionHandler', function()
  {
    return function(exception, cause)
    {
      fundebug.notifyError(exception);
    };
  });

// exceptionOverwrite添加到模块依赖中
angular.module('myApp', [
    ...,
    ...,
    'exceptionOverwrite'
]) 
```


##### 参考

- [AngularJS文档：$exceptionHandler](https://docs.angularjs.org/api/ng/service/$exceptionHandler)

