## 微信小程序

Fundebug的微信小程序插件能够实时监控小程序的错误，出错时第一时间给您发送报警，帮助您快速发现BUG，及时修复BUG。

### 插件特点

  * [两行代码搞定](./integration/index.md);
  * 自动上报onError捕获的错误;
  * [自动捕获wx.request请求错误(状态码非2xx或者fail)](https://blog.fundebug.com/2018/06/20/wxjs-http/);
  * 仅收集出错信息，保护隐私，收集[location](./customize/setlocation.md)、[systemInfo](./customize/setsysteminfo.md)和[userInfo](./customize/setuserinfo.md)需要开发者进行配置;
  * 可以记录出错前的[函数调用](https://blog.fundebug.com/2018/04/10/fundebug-wxjs-0.1.2/)、[HTTP请求](https://blog.fundebug.com/2018/06/25/wxjs-behavior-http-console/)、[console打印](https://blog.fundebug.com/2018/06/25/wxjs-behavior-http-console/)等用户行为，帮助开发者快速复现BUG;

### 参考

- [Fundebug微信小程序插件更新至0.8.0](https://blog.fundebug.com/2018/08/23/fundebug-wxjs-0-8-0/)
- [Fundebug微信小程序插件更新至0.7.1](https://blog.fundebug.com/2018/08/13/wxjs-0-7-1/)
- [Fundebug微信小程序用户行为添加HTTP请求和console打印](https://blog.fundebug.com/2018/06/25/wxjs-behavior-http-console/)
- [Fundebug支持监控微信小程序HTTP请求错误](https://blog.fundebug.com/2018/06/20/wxjs-http/)
- [Fundebug微信小程序错误监控支持用户行为回溯](https://blog.fundebug.com/2018/04/10/fundebug-wxjs-0.1.2/)
- [Fundebug专业为微信小程序踩坑](https://blog.fundebug.com/2017/02/11/weixin-miniprogram-need-fundebug/)
- [Fundebug上线微信小程序错误监控啦](https://blog.fundebug.com/2017/01/23/fundebug-support-wxjs/)




