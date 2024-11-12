#### metaData

metaData是其他定义信息，开发者可以使用metaData收集所需要的信息。metaData只能在JavasScript中配置:

- 使用[init](../api/init.md)方法配置（推荐）

插件版本 >= 2.0.0

```js
fundebug.init({
    metaData : {
     company:
     {
         name: "Fundebug",
         nation: "China"
     }
   }
})
```

- 通过fundebug配置

```js
if ("fundebug" in window) {
   fundebug.metaData = {
     company:
     {
         name: "Fundebug",
         nation: "China"
     }
   };
}
```