## 录屏

从**BUG 监控插件 1.7.3**[版本](./version.md)开始，我们拆分了录屏代码。如果需要使用录屏功能的话，需要单独接入录屏插件。

目前，录屏插件的最新版为 **0.8.0**。

### 使用 script 方式接入

```html
<script
    type="text/javascript"
    src="https://js.fundebug.cn/fundebug.revideo.0.8.0.min.js"
    crossorigin="anonymous"
></script>
```

### 使用 NPM 方式接入

```javascript
require("fundebug-revideo");
```

### 备注

-   录屏功能目前不支持 flash, iframe 以及 canvas；
-   若您的网站非 HTTPS，则录屏视频播放不正常，请使用[Firefox](https://www.mozilla.org/zh-CN/firefox/)浏览器登陆 Fundebug，参考：[浏览器“阻止载入混合活动内容”，录屏在开发环境无法正常显示](./other/show_revideo_in_dev.md)；
-   若网站运行在子路径下，则需要配置`domain`方可正常使用。参考[domain 属性配置](./customize/domain.md)；

### 参考

-   [黑科技！Fundebug 支持可视化重现出错场景](https://blog.fundebug.com/2018/05/21/fundebug_release_black_tech_replay/)
-   [Fundebug 录屏插件更新至 0.6.0, 大幅优化性能](https://blog.fundebug.com/2019/08/27/release_revedio_0_6_0/)
