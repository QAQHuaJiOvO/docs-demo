### 通过 API 删除 Source Map

Fundebug 支持通过 POST 请求上传 Source Map，接口为`/javascript/sourcemap/clear`, 参数为

-   apikey: 获取 apikey 需要免费注册帐号并且创建项目。

下面给出 Node.js 版本的代码供参考，

```js
const request = require("request-promise");
const fs = require("fs");

const options = {
    method: "POST",
    uri: "https://fundebug.com/javascript/sourcemap/clear",
    body: {
        apikey: "YOUR-API-KEY"
    },
    json: true
};

request(options)
    .then(function(success) {
        console.log("success:", success);
    })
    .catch(function(err) {
        console.log("fail:", err);
    });
```
