####apikey

apikey是区分项目的标识。其中，获取**apikey需要**[免费注册](https://www.fundebug.com/team/create)帐号并且[创建项目](https://www.fundebug.com/project/create)，注意选择对应的项目类型。

- 使用fundebug的属性进行配置apikey

```javascript
fundebug.apikey = "API-KEY" 
```

- 使用fundebug.config函数配置apikey

```js
fundebug.config(
{
    apikey: "API-KEY"
})
```