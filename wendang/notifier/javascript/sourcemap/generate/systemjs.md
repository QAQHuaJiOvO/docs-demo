####[SystemJS](https://github.com/systemjs/systemjs)

SystemJS是模块加载器。

使用[SystemJS Build Tool](https://github.com/systemjs/builder)生成Source Map:

```
builder.bundle('myModule.js', 'outfile.js',
{
    minify: true,
    sourceMaps: true
});
```

- sourceMapContents选项可以指定是否将源码写入Source Map文件

