#### apikey

apikey是区分项目的标识。其中，获取**apikey需要**[免费注册](https://www.fundebug.com/team/create)帐号并且[创建项目](https://www.fundebug.com/project/create)，注意选择对应的项目类型。注意，项目类型请选择"微信小游戏"。

 ```js
fundebug.init({
  apikey: "API-KEY"
});
 ```

 apikey为必须配置的属性，否则插件会报错。