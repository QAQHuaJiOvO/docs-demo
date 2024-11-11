####[Grunt](https://github.com/gruntjs/grunt)

Grunt是JavaScript项目构建工具。

#####1. 使用[grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)压缩JavaScript代码时

配置grunt-contrib-uglify插件以生成Source Map

```
grunt.initConfig(
{
    uglify:
    {
        options:
        {
            sourceMap: true
        }
    }
});
```

#####2. 使用[grunt-usemin](https://github.com/yeoman/grunt-usemin)打包源码时

grunt-usemin会依次调用[grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat)与[grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)对源码进行打包和压缩。因此都需要进行配置:

```
grunt.initConfig(
{
    concat:
    {
        options:
        {
            sourceMap: true
        }
    },
    uglify:
    {
        options:
        {
            sourceMap: true,
            sourceMapIn: function(uglifySource)
            {
                return uglifySource + '.map';
            },
        }
    }
});
```