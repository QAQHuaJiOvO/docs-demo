#### 监控 [Cordova](https://cordova.apache.org/)

##### 1. [接入插件](../integration/index.md)

##### 2. 修改[Content-Security-Policy](https://content-security-policy.com/)配置

将**https://js.fundebug.cn**与**https://web.fundebug.net**添加到**default-src**中即可：

```
<meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval' https://web.fundebug.net  https://js.fundebug.cn; style-src 'self' 'unsafe-inline'; media-src *; img-src 'self' data: content:;">
```

<br>

#####PS：为什么需要修改[Content-Security-Policy](https://content-security-policy.com/)配置？

处于安全方面的考虑，Cordova 使用[cordova-plugin-whitelist](https://github.com/apache/cordova-plugin-whitelist)配置了严格的安全策略。

Cordova 的默认的 Content-Security-Policy 配置位于**www/index.html**内，如下所示：

```
<meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *; img-src 'self' data: content:;">
```

为了在在 Cordova 中使用 Fundebug，则需要修改[Content-Security-Policy](https://content-security-policy.com/)。

否则，将会遇到这些的错误：

加载 fundebug 脚本失败：

```
08-02 14:10:52.132  4185  4185 I chromium: [INFO:CONSOLE(0)] "Refused to load the script 'https://js.fundebug.cn/fundebug.2.0.0.min.js' because it violates the following Content Security Policy directive: "default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval' 'unsafe-inline'". Note that 'script-src' was not explicitly set, so 'default-src' is used as a fallback.
```

发送错误数据到 Fundebug 失败：

```
08-02 11:10:59.848 20520 20520 I chromium: [INFO:CONSOLE(1)] "Uncaught SecurityError: Failed to execute 'open' on 'XMLHttpRequest': Refused to connect to 'https://web.fundebug.net/event/' because it violates the document's Content Security Policy.", source: https://js.fundebug.cn/fundebug.2.0.0.min.js (1)
```
