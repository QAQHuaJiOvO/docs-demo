####Source Map简介

部署JavaScript脚本之前，开发者通常会使用[UglifyJS2](https://github.com/mishoo/UglifyJS2)等工具对代码压缩变换。

#####为什么需要转换代码？

- 压缩，减小体积。比如jQuery 1.9的源码，压缩前是252KB，压缩后是32KB。
- 多个文件合并，减少HTTP请求数。
- 其他语言编译成JavaScript。最常见的例子就是CoffeeScript。

#####什么是Source Map?

Source Map是一个JSON文件，其中包含了**代码转换前后的位置信息**。给定一个转换之后的压缩代码的位置，就可以通过Source Map获取转换之前的代码位置，反过来也一样。

#####Source Map有哪些属性？

- version：Source Map的版本号。
- file：转换后的文件名。(可选)
- sourceRoot：转换前的文件所在的目录。如果与转换前的文件在同一目录，该项为空。(可选)
- sources：转换前的文件列表。
- sourcesContent: 转换前的文件内容列表，与sources列表依次对应。(可选)
- names：转换前的所有变量名和属性名。
- mappings：记录位置信息的字符串，经过编码。

##### 参考链接
- [Source Map入门教程](https://blog.fundebug.com/2017/03/13/sourcemap-tutorial/)
- [JavaScript Source Map 详解](http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html)
- [Source Map Revision 3 Proposal](https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit)