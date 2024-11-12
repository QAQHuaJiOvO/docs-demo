#### [Webpack](https://github.com/webpack/webpack)

Webpack是前端打包工具。在其配置文件**webpack.config.js**中设置**[devtool](https://webpack.js.org/configuration/devtool/)**即可生成Source Map文件：

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: "source-map"
};
```

**devtool**有12种不同取值，分别生成不同类型的Source Map，可以根据需要进行配置。

其中，Fundebug支持上传的Source Map类型有**source-map**、**nosources-source-map**与**hidden-source-map**, **cheap-source-map**与**cheap-module-source-map**。它们的特点如下表：

| devtool                   | names | sourcesCentent | sourceMappingURL |
| ------------------------- | ---- | ---------------| ---------------- |
| source-map                | 有   | 有              | 有               |
| hidden-source-map         | 有   | 有              | 无               |
| nosources-source-map      | 有   | 无              | 有               |
| cheap-source-map          | 无   | 有              | 有               |
| cheap-module-source-map   | 无   | 有              | 有               |



- Source Map文件无**names**属性时，出错位置还原之后的列信息丢失
- Source Map文件无**sourcesCentent**属性时，出错位置还原之后的源代码丢失
- 源代码中无**sourceMappingURL**时，Fundebug无法主动下载Source Map文件，则用户必须主动上传Source Map文件。

我们推荐用户选择**source-map**类型，如果生成的Source Map文件过大时(超过**10MB**)，则可以选择**nosources-source-map**类型。

##### 参考链接

- [[webpack] devtool配置对比](http://www.cnblogs.com/hhhyaaon/p/5657469.html)
- [webpack sourcemap 选项多种模式的一些解释](https://segmentfault.com/a/1190000004280859)
- [Devtool - Webpack Documentation](https://webpack.js.org/configuration/devtool/)


