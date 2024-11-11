### 浏览器“阻止载入混合活动内容”，录屏在开发环境无法正常显示

如果在开发环境接入录屏(revideo)，会发现视频无法正常播放，其主要原因是`www.fundebug.com`使用`https`加密协议，而开发环境是`http`。安全起见，浏览器会屏蔽所有的 HTTP 请求。

谷歌浏览器报错：
`Mixed Content: The page at '<URL>' was loaded over HTTPS, but requested an insecure stylesheet '<URL>'. This request has been blocked; the content must be served over HTTPS.`

Firefox 报错：
`已阻止载入混合活动内容“http:127.0.0.1:9000/xxxxx"`

### 解决方案

使用`Firefox`，可以暂时放开限制。配置方法如下：

-   在`Fundebug`的错误详情页面，点击`场景重现`；
-   点击浏览器网址左侧的安全锁的标记；
-   点击`连接`右侧的箭头；
-   点击`暂时解除保护`。
