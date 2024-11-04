#### appversion

appversion指的是应用版本

- 使用[init](../api/init.md)方法配置（推荐）

插件版本 >= 2.0.0

```js
fundebug.init({
    appversion: "3.2.5"
})
```

- 在HTML中配置`<script>`标签中配置appversion属性

```html
<script src="https://js.fundebug.cn/fundebug.2.8.6.min.js" 
            apikey="API-KEY" 
            appversion="3.2.5"  crossorigin="anonymous" ></script>
```

- 在JavaScript中配置appversion变量

```js
if ("fundebug" in window) {
    fundebug.appversion = "3.2.5";  
}
```
 

若您配置了appversion，并希望区分不同版本的Souce Map，则需要在[上传Source Map](../sourcemap/upload/index.md)时也指定对应的appversion。