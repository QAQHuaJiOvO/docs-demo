#### 配置广告屏蔽插件

一些屏蔽广告的浏览器插件例如[Adblock Plus](https://chrome.google.com/webstore/detail/adblock-plus/cfhdojbkjhnklbpkdaibdccddilifddb)、[uBlock Origin](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=zh-CN)会导致Fundebug插件无法发送错误数据：

<table>
	<img src="../../../images/notifier/javascript/adblock_plus_error.png" align="left" style="width:80%;"><br>
</table>

以下任一方法都可以解决这个问题：

##### 1. 关闭插件

##### 2. 在隐身模式下打开网页

##### 3. 配置插件 

对于**Adblock Plus**，将fundebug加入过滤规则：

<table>
	<img src="../../../images/notifier/javascript/adblock_plus_filter.png" align="left" style="width:30%;"><br>
</table>

对于**uBlock Origin**，将需要监控网站域名加入白名单：

<table>
	<img src="../../../images/notifier/javascript/ublock_origin_whitelist.png" align="left" style="width:50%;"><br>
</table>



