####[Gulp](https://github.com/gulpjs/gulp)

Gulp是JavaScript项目构建工具。

使用[gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps)生成Source Map:

```
var gulp = require('gulp');
var plugin1 = require('gulp-plugin1');
var plugin2 = require('gulp-plugin2');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('javascript', function() {
  gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
      .pipe(plugin1())
      .pipe(plugin2())
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('dist'));
});
```

