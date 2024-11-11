import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs-demo/",
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '文档', link:'/README.md'}
    ],
    sidebar: [
      {
        text:'支付宝小程序',link:'/wendang/notifier/aliapp/index',
        items:[
          {text:'接入插件',link:'/wendang/notifier/aliapp/integration/index'},
          {text:'测试插件',link:'/wendang/notifier/aliapp/test/index'},
          {text:'属性配置',link:'/wendang/notifier/aliapp/customize/index',
            items:[
            {text:'apikey',link:'/wendang/notifier/aliapp/customize/apikey'},
            {text:'setSystemInfo',link:'/wendang/notifier/aliapp/customize/setsysteminfo.md'},
            {text:'setLocation',link:'/wendang/notifier/aliapp/customize/setlocation.md'},  
            {text:'appVersion',link:'/wendang/notifier/aliapp/customize/appversion.md'},  
            {text:'releaseStage',link:'/wendang/notifier/aliapp/customize/releasestage'},  
            {text:'filters',link:'/wendang/notifier/aliapp/customize/filters'},  
            {text:'silent',link:'/wendang/notifier/aliapp/customize/silent'},  
            {text:'silentPage',link:'/wendang/notifier/aliapp/customize/silentpage'},  
            {text:'silentConsole',link:'/wendang/notifier/aliapp/customize/silentconsole'},  
            {text:'metaData',link:'/wendang/notifier/aliapp/customize/metadata'},  
          ]},
          {text:'API',link:'/wendang/notifer/aliapp//api/index',
            items:[
              {text:'init',link:'/wendang/notifier/aliapp/api/init'},
              {text:'test',link:'/wendang/notifier/aliapp/api/test'},
              {text:'notify',link:'/wendang/notifier/aliapp/api/notify'},
              {text:'notifyError',link:'/wendang/notifier/aliapp/api/notifyerror'},
            ]
          },
          {text:'插件版本',link:'/wendang/notifier/aliapp/version'},
        ]
      },
      {
        text:'Java',link:'/wendang/notifier/java/index',
        items:[
          {text:'接入插件',link:'/wendang/notifier/java/integration/index',
            items:[
              {text:'Java',link:'/wendang/notifier/java/integration/java'},
              {text:'Spring',link:'/wendang/notifier/java/integration/spring'},
            ]
          },
          {text:'测试插件',link:'/wendang/notifier/java/test'},
          {text:'属性配置',link:'/wendang/notifier/java/customize/index',
            items:[
              {text:'apikey',link:'/wendang/notifier/java/customize/apikey'},
              {text:'appVersion',link:'/wendang/notifier/java/customize/appversion'},
              {text:'releaseStage',link:'/wendang/notifier/java/customize/releasestage'}, 
              {text:'filters',link:'/wendang/notifier/java/customize/filters'}, 
              {text:'silent',link:'/wendang/notifier/java/customize/silent'}, 
              {text:'metaData',link:'/wendang/notifier/java/customize/metadata'}, 
            ]
          },
          {text:'API',link:'/wendang/notifier/java/api/index',
                items:[
                  {text:'notifyError',link:'/wendang/notifier/java/api/notifyerror'},
                  {text:'notify',link:'/wendang/notifier/java/api/notify'},
                ]
          },
          {text:'插件版本',link:'/wendang/notifier/java/version'} 
          ]
      },
      {
        text:'控制台',link:'/wendang/dashboard/index',
        items:[
          {text:'菜单栏',link:'/wendang/dashboard/menu/index'},
          {text:'过滤栏',link:'/wendang/dashboard/filter/index'},
          {text:'错误列表',link:'/wendang/dashboard/list/index',
            items:[
              {text:'折线图',link:'/wendang/dashboard/list/chart'},
              {text:'功能栏',link:'/wendang/dashboard/list/function'},
              {text:'错误列表',link:'/wendang/dashboard/list/list'},
            ]
          },
          {text:'错误详情',link:'/wendang/dashboard/detail/index',
            items:[
              {text:'错误详情',link:'/wendang/dashboard/detail/error',
                items:[
                  {text:'错误状态',link:'/wendang/dashboard/detail/error/status'},
                ]
              },
              {text:'事件列表',link:'/wendang/dashboard/detail/events'},
              {text:'事件详情',link:'/wendang/dashboard/detail/event'},
              {text:'设备详情',link:'/wendang/dashboard/detail/equipment'},
            ]
          },
          {text:'设置',link:'/wendang/dashboard/setting/index',
            items:[
              {text:'账户设置',link:'/wendang/dashboard/setting/member'},
              {text:'团队设置',link:'/wendang/dashboard/setting/team'},
              {text:'项目设置',link:'/wendang/dashboard/setting/project'},
            ]
          },
        ]
      },
      {
        text:'报警设置',link:'/wendang/alert/index',
        items:[
          {text:'报警环境',link:'/wendang/alert/env/index'},
          {text:'报警规则',link:'/wendang/alert/rules/index'},
          {text:'报警方式',link:'/wendang/alert/channel',
            items:[
              {text:'钉钉',link:'/wendang/alert/dingtalk/index'},
              {text:'企业微信',link:'/wendang/alert/wechatwork/index'},
              {text:'飞书',link:'/wendang/alert/feishu/index'},
              {text:'飞书捷径',link:'/wendang/alert/feishujiejing/index'},
              {text:'邮件',link:'/wendang/alert/email/index'},
              {text:'Slack',link:'/wendang/alert/slack/index'},
              {text:'Worktile',link:'/wendang/alert/worktile/index'},
              {text:'自定义Webhook',link:'/wendang/alert/outgoing/index'},                      
            ]
          },
          {text:'实时报警',link:'/wendang/alert/realtime'},
        ]
      }
    ],
  

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
