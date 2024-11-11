
### 避免干扰console打印

Fundebug通过重写console对象监控浏览器控制台的打印信息，并添加到用户行为中。这样会导致在控制台下打印的日志无法正确看到原代码文件中的位置：

<img src="../../../images/notifier/other/browser_blackboxing_fundebug/fundebug_catched_console.png" align="center" style="width:80%;">

这样会造成开发过程中的困扰，有3种不同方法可以解决这个问题：

- [配置浏览器Blackboxing](./browser_blackboxing_fundebug.md)(推荐)
- 在开发环境不接入Fundebug
