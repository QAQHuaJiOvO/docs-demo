#### 常见问题

##### 1. Fundebug是免费的吗?

Fundebug已经开始收费了，新用户有14天免费的试用期，试用期功能不受任何限制，试用期结束之后，将会切换到免费版。

免费版的功能受到限制，每个月接收的错误事件数上限为**3000**，并且不能使用**用户行为**、**Source Map**等高级功能。

关于收费详情，请查看我们的[价格页面](https://www.fundebug.com/price)。

##### 2. 套餐的事件额度用完了会发生什么？
 
当您购买的套餐的事件额度用完之后，Fundebug将**不再存储新的错误数据**，这时上报错误的接口仍然会返回200，**完全不会影响您的应用的正常运行**。但是，上报的新错误将不会存储到数据库，导致您无法查看新产生的错误，因此，我们建议您升级套餐。

如果您没有升级套餐的话，下个账单月的事件数会从0开始重新计算。


##### 3. Fundebug支持哪些语言?

目前，Fundebug支持前端[JavaScript](/notifier/javascript/index.md)、[微信小程序](/notifier/wxjs/index.md)、[微信小游戏](/notifier/wegame/index.md)、[支付宝小程序](/notifier/aliapp/index.md)、[React Native](/notifier/reactnative/index.md)、[Java](/notifier/java/index.md)以及后端[Node.js](/notifier/nodejs/index.md)。我们的目标是全栈错误监控服务，其他语言支持正在开发。

##### 4. 如何获取apikey?

获取**apiKey需要**[免费注册](https://www.fundebug.com/team/create)，然后[创建项目](https://www.fundebug.com/project/create)。

在**[控制台](https://www.fundebug.com/dashboard/)**，打开**[项目设置](https://www.fundebug.com/setting/projects)**，然后打开对应的项目之后，点击apikey即可显示。


##### 5. 我为什么没有邮件报警?

正常情况下，使用**fundebug.notify("test")**进行测试，若收到报警邮件，表示一切正常。

如果没有收到邮件报警，有以下可能的原因：

- 邮件进入了垃圾箱，这时请将我们发送邮件的地址**noreply@mail.fundebug.com**加入白名单；
- 一些屏蔽广告的浏览器插件例如[Adblock Plus](https://chrome.google.com/webstore/detail/adblock-plus/cfhdojbkjhnklbpkdaibdccddilifddb)、[uBlock Origin](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=zh-CN)会导致Fundebug插件无法发送错误数据，请按照文档[配置广告屏蔽插件](./notifier/javascript/other/blocked.md)

另外，我们的错误提醒算法比较复杂: 只提醒生产环境错误；错误数达到阈值才提醒; 一定时间间隔再次提醒...若没有收到邮件报警，一般是正常的。这时，在[控制台](https://www.fundebug.com/dashboard)是可以看到错误数据的。

如果还有问题，请与我们客服人员联系。

##### 6. Fundebug网页监控支持哪些浏览器?

我们的JavaScript监控插件支持各种主流浏览器，包括IE6~IE11。


##### 7. Fundebug是否开源?

由于产品还处于内测阶段，所以暂时不会开源。但是，作为有态度的技术公司，我们乐意在未来拥抱开源，与大家一起进步。

##### 8. 错误数据保存多久?

目前，错误数据的保存时间是3个月。产品收费之后，数据保存时间的长度将与所选择的付费套餐相关。

##### 9. 控制台没有错误？

如果没有报错请求，有以下可能的原因：

- 接入失败
- 一些屏蔽广告的浏览器插件例如[Adblock Plus](https://chrome.google.com/webstore/detail/adblock-plus/cfhdojbkjhnklbpkdaibdccddilifddb)、[uBlock Origin](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=zh-CN)会导致Fundebug插件无法发送错误数据，请按照文档[配置广告屏蔽插件](./notifier/javascript/other/blocked.md)

如果有报错请求且控制台没有错误，请检查控制台右上角的时间区间是否正确。

如果还有问题，请与我们客服人员联系。
