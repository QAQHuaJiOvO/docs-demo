#### 上传Source Map

默认情况下，Fundebug会根据压缩代码中的sourceMappingURL下载Source Map文件，用户仅需要将Source Map文件放在服务器上即可。

如果用户不希望公开Source Map，则可以主动上传Source Map文件。Fundebug提供了3种不同的上传方式: 

- [前端UI上传](./ui.md)
- [API上传](./api.md)
- [fundebug-cli批量上传](./cli.md)

另外，目前Source Map限制大小为**10MB**，如果您的Source Map过大，可以在生成Source Map的时候去除sourcesContent。