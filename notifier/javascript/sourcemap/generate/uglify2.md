#####[UglifyJS2](https://github.com/mishoo/UglifyJS2)

UglifyJS2是命令行工具，用于压缩JavaScript代码。

安装UglifyJS2：
```
npm install uglify-js -g
```

压缩代码的同时生成Source Map：
```
uglifyjs app.js -o app.min.js --source-map app.min.js.map
```


Source Map相关选项：

```
--source-map                  Source Map的文件的路径和名称
--source-map-root             源文件的路径
--source-map-url              //#sourceMappingURL的路径。 默认为--source-map指定的值。
--source-map-include-sources  是否将源代码的内容添加到sourcesContent数组
--source-map-inline           是否将Source Map写到压缩代码的最后一行
--in-source-map               输入Source Map，当源文件已经经过变换时使用
```