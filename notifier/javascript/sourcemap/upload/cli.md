#### 通过 fundebug-cli 批量上传 Source Map

fundebug-cli 是 Fundebug 的命令行工具

##### 安装

请先安装[Node.js](https://nodejs.org/zh-cn/download/)

```
npm install fundebug-cli -g
```

若国外的 NPM 速度太慢的话，可以使用淘宝 NPM 镜像安装:

```bash
npm install fundebug-cli -g --registry=https://registry.npm.taobao.org
```

##### 批量上传 Source Map

```
fundebug-cli upload --apikey "API-KEY" --directory dist/
```

- apikey: 获取**apikey**需要[免费注册](https://www.fundebug.com/team/create)帐号并且[创建项目](https://www.fundebug.com/project/create)，注意选择对应的项目类型
- directory: Source Map 文件所在的目录，该目录中的.map 文件将全部被上传，这里会遍历所有子目录。

##### 设置应用版本

```
fundebug-cli upload --apikey "API-KEY" --appversion 1.0.0 --directory dist/
```

- **appversion**: 可选参数，用于配置应用版本

若希望区分不同版本的 Source Map，则在接入 Fundebug 时，必须配置对应的[appversion](../../customize/appversion.md)属性，并在代码更新时及时更新。

##### 清空 Source Map

```
fundebug-cli clear --apikey "API-KEY"
```

- apikey: 项目的 apikey。
