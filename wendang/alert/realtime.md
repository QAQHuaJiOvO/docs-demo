### 实时报警

在项目设置的“报警规则”页面，默认一个项目 30 分钟内最多报警一次。间隔时间可以调节，甚至能调整为“实时”。

如果您配置了“实时”，我们建议：

-   接入第三方报警(企业微信、钉钉等)，做到真正意义上的实时；我们对邮件报警数量做了限制，每天累计超过 96 封则不再发送；第三方报警没有此限制；
-   合理配置报警规则，防止报警过度；如果发现报警消息过于频繁，请及时调整报警规则；

另外，如果您的数据量很大，请谨慎选择实时报警，因为每一个错误都会发送一次报警提醒。假设一天新增 1 万个错误，那么将会收到 1 万条报警消息。
