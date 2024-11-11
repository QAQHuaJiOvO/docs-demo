#### RequireJS

##### 加载RequireJS

```js
<script src="https://cdn.bootcss.com/require.js/2.3.3/require.js" data-main="/main.js" crossorigin="anonymous" ></script>
```

##### 配置RequireJS

```js
require.config(
{　　　　
    paths:
    {　　　　　　
        "fundebug": "fundebug"　　　
    }　　
});

require(['fundebug'], function(fundebug)
{　　　　
    fundebug.apikey = "API-KEY";
});
```

注意，异步加载Fundebug插件的话，可能会导致一些错误捕获不到。