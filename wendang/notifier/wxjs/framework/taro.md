#### 监控 [Taro 3.x](https://github.com/NervJS/taro)

##### 1. 接入插件

如果是基于 Vue 开发，则需要额外安装`fundebug-vue`插件。

```js
npm install fundebug-wxjs fundebug-vue --save
```

##### 2. 在**src/app.ts**中接入 Fundebug。

```js
import fundebug from "fundebug-wxjs";
fundebug.init({
  apikey: "YOUR-API-KEY",
});
import fundebugVue from "fundebug-vue";
fundebugVue(fundebug, Vue);
```
