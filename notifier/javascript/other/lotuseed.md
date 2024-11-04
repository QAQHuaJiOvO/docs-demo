####莲子数据

莲子数据的插件会拦截错误数据，导致Fundebug插件无法捕获错误。这时需要修改莲子数据插件的接入代码，并将其放在Fundebug插件之前。

```
<script type="text/javascript">
    var _laq = _laq || [];
    _laq.push(['_setApp', 'Q0LGX7Mj5i8tcv3mdkJe']);/* LOTUSEED_APPEY 必填 */
   //  _laq.push(['_setChannel', 'LOTUSEED_CHANNEL']);/* 设置渠道时 可选 */
    _laq.push(['_setVersion', 'funweb:0.0.1']);/* 设置版本时 可选 */
   //  _laq.push(['_setTitle', '自定义title']); /* 页面标题，必要时可以初始化设置 可选 */
    _laq.push(['_trackClick', true]); /*设置追踪页面点击事件（如果没有此项，该功能不开启） */
    _laq.push(['_trackError', true]); /* 设置追踪页面js异常（如果没有此项，该功能不开启） */
    _laq.push(['_trackPageClose', true]); /* 追踪页面关闭（如果没有此项，该功能不开启 可选 */
</script>
<script type="text/javascript" src="https://js.lotuseed.com/lsd.js" crossorigin="anonymous" ></script>
<script src="https://js.fundebug.cn/fundebug.2.0.0.min.js" apikey="API-KEY" crossorigin="anonymous" ></script>
```