####apikey

apikey是区分项目的标识。其中，获取**apikey需要**[免费注册](https://www.fundebug.com/team/create)帐号并且[创建项目](https://www.fundebug.com/project/create)，注意选择对应的项目类型。

你需要在初始化`Fundebug`实例的时候配置apikey属性

```java
 Fundebug fundebug = new Fundebug("apikey");
```