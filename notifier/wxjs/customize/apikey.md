#### apikey

apikey是区分项目的标识。其中，获取**apikey需要**[免费注册](https://www.fundebug.com/team/create)帐号并且[创建项目](https://www.fundebug.com/project/create)，注意选择对应的项目类型。

#### 插件版本 >= 0.6.1

```js
fundebug.init(
{
    apikey: "API-KEY"
})
```


#### 插件版本 <= 0.5.0

```js
fundebug.apikey = "API-KEY";
```