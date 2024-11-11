#### 监控 [AngularJS 1](https://angularjs.org/)

##### 1. [接入插件](../integration/index.md)

将**fundebug.min.js**放在**head**标签中；也可以使用[NPM](../integration/npm.md)、[RequireJS](../integration/requirejs.md)、[动态加载](../integration/dynamical.md)等其他方式接入。

##### 2. 配置exceptionHandler

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
