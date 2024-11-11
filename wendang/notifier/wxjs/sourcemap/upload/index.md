### 上传Source Map

将下载的Source Map文件解压缩，仅需上传解压缩的文件中的**\_\_APP\_\_/app-service.map.map**文件。

**上传步骤**

1. 进入『控制台』
2. 选择『项目设置』
3. 点击『Source Map』
4. 选中需要上传的Source Map文件(支持上传多个Source Map文件)
5. 点击『上传』


上传Source Map时可以配置应用版本:

![](https://image.fundebug.com/2019-08-24-upload-source-map.png)

下图为已经上传的不同版本的Source Map文件:

![](https://image.fundebug.com/2019-08-24-source-map-files.png)

若希望区分不同版本微信小程序的Source Map文件，则需要在接入Fundebug插件时，配置对应的[appversion](https://docs.fundebug.com/notifier/wxjs/customize/appversion.html)属性，与上传Source Map时设置的版本保持一致：

```javascript
fundebug.init({
    appVersion: "3.2.5"
});
```
