## 监控 [Vue.js](https://cn.vuejs.org/)


### 安装[fundebug-javascript](https://www.npmjs.com/package/fundebug-javascript)与[fundebug-vue](https://www.npmjs.com/package/fundebug-vue)

```bash
npm install fundebug-javascript fundebug-vue --save
```

### 配置

```javascript
import * as fundebug from "fundebug-javascript";
import FundebugVue from "fundebug-vue";
fundebug.init({
    apikey: "API-KEY"
})
```
#### Vue 2.x

```javascript
new FundebugVue(fundebug).installVueErrorHandler(Vue);
```

#### Vue 3.x

```javascript
createApp(App)
  .use(new FundebugVue(fundebug))
  .use(router)
  .use(store)
  .mount("#app");
```

其中，获取**apikey**需要[免费注册](https://fundebug.com/team/create)帐号并且[创建项目](https://fundebug.com/project/create)。
