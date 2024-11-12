## filters

通过配置 filters 属性，用户可以过滤掉一些不需要捕获的错误，比如[Script error.](../other/script_error.md)

- 使用[init](../api/init.md)方法配置（推荐）

插件版本 >= 2.0.0

```js
fundebug.init({
    filters : [
        {
            message: /^Script error\.$/
        }
    ]
})
```

- 通过fundebug配置

```javascript
if ("fundebug" in window) {
    fundebug.filters = [
        {
            message: /^Script error\.$/
        }
    ];
}
```

### 配置规则

filters 属性有以下特点：

-   它是一个数组，数组中的元素为**过滤规则**，当错误符合数组中任意一条过滤规则时，则会被过滤
-   **过滤规则**是 JavaScript 对象，该对象的 Key 为错误的属性名，Value 为正则表达式(唯一的特例是"inexistence")；
-   当错误的属性匹配对应正则表达式时，则会被过滤；
-   当过滤规则的属性值为"inexistence"时，则会过滤某个属性不存在的错误；

### 示例

#### 示例 1：过滤 name 为 ReferenceError 的错误

```javascript
fundebug.filters = [
    {
        name: /^ReferenceError$/
    }
];
```

#### 示例 2：过滤 name 为 ReferenceError，且 message 中含 aler 的错误

```javascript
fundebug.filters = [
    {
        name: /^ReferenceError$/,
        message: /aler/
    }
];
```

#### 示例 3：过滤 method 为 GET，且 status 为 401 的错误

```javascript
fundebug.filters = [
    {
        req: {
            method: /^GET$/
        },
        res: {
            status: /^401$/
        }
    }
];
```

#### 示例 4：过滤特定域名的资源加载错误

```javascript
fundebug.filters = [
    {
        target: {
            src: /example.com/
        }
    }
];
```

#### 示例 5：过滤 status 不存在的图片加载错误

```javascript
fundebug.filters = [
    {
        target: {
            tagName: /^IMG$/,
            status: "inexistence"
        }
    }
];
```

#### 示例 6：配置多条过滤规则

```javascript
fundebug.filters = [
    {
        message: /^Script error\.$/
    },
    {
        req: {
            method: /^GET$/
        },
        res: {
            status: /^401$/
        }
    }
];
```

#### 示例 7：只监控特定域名的报错

只监控域名为 a.com 或者 b.com 的报错

```javascript
fundebug.filters = [
    {
        url: /^((?!(a\.com|b\.com)).)*$/
    }
];
```

不同[类型](../type/index.md)的错误的属性略有不同，具体可以查看[JavaScript 执行错误](../type/javascript.md)、[资源加载错误](../type/resource.md)以及[HTTP 请求错误](../type/http.md)

### 常见错误过滤

#### [Script error.](../other/script_error.md)

```javascript
fundebug.filters = [
    {
        message: /Script error/
    }
];
```

#### [WeixinJSBridge is not defined](https://blog.fundebug.com/2017/02/18/weixinjsbridge-is-not-defined/)

```javascript
fundebug.filters = [
    {
        message: /WeixinJSBridge is not defined/
    }
];
```
