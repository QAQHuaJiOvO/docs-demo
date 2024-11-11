## 配置浏览器[Blackboxing](https://developer.chrome.com/devtools/docs/blackboxing)

Fundebug 通过重写 console 对象监控浏览器控制台的打印信息，并添加到用户行为中。这样会导致在控制台下打印的日志无法正确看到原代码文件中的位置：

<img src="../../../images/notifier/other/browser_blackboxing_fundebug/fundebug_catched_console.png" align="center" style="width:61.8%;">

这样会造成开发过程中的困扰，可以通过配置浏览器[Blackboxing](https://developer.chrome.com/devtools/docs/blackboxing)来解决问题。

#### 1. 进入开发者工具面板，选择 Settings

<div>
<img src="../../../images/notifier/other/browser_blackboxing_fundebug/chrome_setting_click.png" style="width:61.8%;">
</div>

#### 2. 在左侧菜单栏点击 Blackboxing

<div>
<img src="../../../images/notifier/other/browser_blackboxing_fundebug/chrome_setting_blackboxing.png"
style="width:61.8%;">
</div>

#### 3. 点击 Add pattern...

将`/fundebug.*\.js$`黏贴进去

<div>
<img src="../../../images/notifier/other/browser_blackboxing_fundebug/chrome_setting_blackboxing_done.png"
 style="width:61.8%;"><br>
</div>

#### 4. 再次刷新页面

将会看到 Fundebug 插件已经不会干扰 Console 输出了:\*\*

<div>
<img src="../../../images/notifier/other/browser_blackboxing_fundebug/fundebug_blocked_console.png"  style="width:61.8%;"><br>
</div>

#### 参考

-   [Chrome 文档：Blackbox JavaScript Source Files](https://developer.chrome.com/devtools/docs/blackboxing)
