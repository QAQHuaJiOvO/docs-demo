#### 通过 API 上传 Source Map

##### 上传 Source Map

```bash
curl https://fundebug.com/javascript/sourcemap/upload \
     -X POST \
     -F apikey=API-KEY \
     -F sourceMap=@dist/app.js.map
```

-   **apikey**: 项目的**apikey**，获取**apikey**需要[免费注册](https://www.fundebug.com/team/create)帐号并且[创建项目](https://www.fundebug.com/project/create)，注意选择对应的项目类型
-   **sourceMap**: 需要上传的 Source Map 文件，**dist/app.js.map**是 Source Map 文件的路径，**=**符号之后的**@**符号是必不可少的

如果你使用代码上传，请参考[fundebug-javascript-sourcemap-upload](https://github.com/Fundebug/fundebug-javascript-sourcemap-upload)示例代码。

##### 设置应用版本

```bash
curl https://fundebug.com/javascript/sourcemap/upload \
     -X POST \
     -F apikey=API-KEY \
     -F appversion=1.0.0 \
     -F sourceMap=@dist/app.js.map
```

-   **appversion**: 可选参数，用于配置应用版本

若希望区分不同版本的 Source Map，则在接入 Fundebug 时，必须配置对应的[appversion](../../customize/appversion.md)属性，并在代码更新时及时更新。

##### 上传压缩代码:

```bash
curl https://fundebug.com/javascript/sourcemap/upload \
     -X POST \
     -F apikey=API-KEY \
     -F mapScript=@dist/app.js
```

-   **mapScript**: 压缩代码

##### 上传压缩之前的源代码:

```bash
curl https://fundebug.com/javascript/sourcemap/upload \
     -X POST \
     -F apikey=API-KEY \
     -F ./app/app.js=@src/app/app.js \
```

其中，**"./app/app.js"**为 Source Map 文件中 sources 数组中的值，用于区分不同的源代码文件。
