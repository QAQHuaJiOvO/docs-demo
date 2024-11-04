## 事件数是如何定义的?

简单地说，**一个事件指的是上报一次报错数据**。以前端应用为例，每次调用[fundebug.test()](https://docs.fundebug.com/notifier/javascript/api/test.html)都会上报一次错误数据，则算作一个事件。

另外，**同一个错误重复上报将会重复计算事件数**。同一处代码 BUG，在不同设备、不同浏览器、不同页面的报错事件的数据细节会有所不同，[Fundebug](https://www.fundebug.com/)可以将这些事件智能聚合为同一个错误。但是，我们是按照事件数而不是错误数计费的。例如，当某个错误重复出现了 1000 次时，则事件数则为 1000。

详情请查看我们的博客：[《Fundebug 计费标准解释：事件数是如何定义的？》](https://blog.fundebug.com/2019/02/28/what-is-event-number-when-use-fundebug/)
