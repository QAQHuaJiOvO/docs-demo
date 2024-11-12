### Script error.

关于 Script error.的原理的解法，请参考我们的博客:

-   [Script error.全面解析](https://blog.fundebug.com/2017/04/05/understand-script-error/)
-   [Script error.深度测试](https://blog.fundebug.com/2017/04/06/test-script-error/)
-   [Script error.解决方法](https://blog.fundebug.com/2017/04/07/solve-script-error/)

#### 配置[filters](../customize/filters.md)可以过滤 Script error.

```javascript
fundebug.filters = [
    {
        message: /Script error/
    }
];
```
