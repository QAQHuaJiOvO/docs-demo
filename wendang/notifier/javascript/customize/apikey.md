#### apikey

apikey 是区分项目的标识。其中，获取**apiKey 需要**[免费注册](https://www.fundebug.com/team/create)帐号并且[创建项目](https://www.fundebug.com/project/create)，注意选择对应的项目类型。

- 使用[init](../api/init.md)方法配置（推荐）

插件版本 >= 2.0.0

```js
fundebug.init({
  apikey: "API-KEY",
});
```

- 在 HTML 中配置`<script>`标签中配置 apikey 属性

```html
<script
  src="https://js.fundebug.cn/fundebug.2.8.6.min.js"
  apikey="API-KEY"
  crossorigin="anonymous"
></script>
```

- 在 JavaScript 中配置 apikey 变量

```js
if ("fundebug" in window) {
  fundebug.apikey = "API-KEY";
}
```
