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
      {text:'简介',link:'README'},
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
          {text:'API',link:'/wendang/notifier/aliapp//api/index',
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
      },
      {
        text:'微信小程序',link:'/wendang/notifier/wxjs/index.md',
        items:[
          {text:'接入插件',link:'/wendang/notifier/wxjs/integration/index.md',
            items:[
              {text:'NPM',link:'/wendang/notifier/wxjs/integration/npm.md'},
            ]
          },
          {text:'测试插件',link:'/wendang/notifier/wxjs/test.md'},
          {text:'属性配置',link:'wendang/notifier/wxjs/customize/index',
            items:[
              {text:'apikey',link:'wendang/notifier/wxjs/customize/apikey'},
              {text:'appversion',link:'wendang/notifier/wxjs/customize/appversion'},
              {text:'releaseStage',link:'wendang/notifier/wxjs/customize/releasestage'},
              {text:'filters',link:'wendang/notifier/wxjs/customize/filters'},
              {text:'http Timeout',link:'wendang/notifier/wxjs/customize/httptimeout'},
              {text:'silent',link:'wendang/notifier/wxjs/customize/silent'},
              {text:'silentApp',link:'wendang/notifier/wxjs/customize/silentapp'},
              {text:'silentPage',link:'wendang/notifier/wxjs/customize/silentpage'},
              {text:'silentBehavior',link:'wendang/notifier/wxjs/customize/silentbehavior'},
              {text:'silentConsole',link:'wendang/notifier/wxjs/customize/silentconsole'},
              {text:'silentinject',link:'wendang/notifier/wxjs/customize/silentinject'},
              {text:'silentHttp',link:'wendang/notifier/wxjs/customize/silenthttp'},
              {text:'silentHttpHeader',link:'wendang/notifier/wxjs/customize/silenthttpheader'},
              {text:'monitorHttpData',link:'wendang/notifier/wxjs/customize/monitorhttpdata'},
              {text:'monitorResponse',link:'wendang/notifier/wxjs/customize/monitorresponse'},
              {text:'monitorMethodCall',link:'wendang/notifier/wxjs/customize/monitormethodcall'},
              {text:'monitorMethodArguments',link:'wendang/notifier/wxjs/customize/monitormethodarguments'},
              {text:'methodWhitelist',link:'wendang/notifier/wxjs/customize/methodwhitelist'},
              {text:'methodBlacklist',link:'wendang/notifier/wxjs/customize/methodblacklist'},
              {text:'setSystemInfo',link:'wendang/notifier/wxjs/customize/setsysteminfo'},
              {text:'setUserInfo',link:'wendang/notifier/wxjs/customize/setuserinfo'},
              {text:'setLocation',link:'wendang/notifier/wxjs/customize/setlocation'},
              {text:'metaData',link:'wendang/notifier/wxjs/customize/metadata'},
              {text:'callback',link:'wendang/notifier/wxjs/customize/callback'},
              {text:'sampleRate',link:'wendang/notifier/wxjs/customize/samplerate'},
              {text:'systeminfo',link:'wendang/notifier/wxjs/customize/systeminfo'},
              {text:'userinfo',link:'wendang/notifier/xjs/customize/userinfo'},
              {text:'breadcrumbSize',link:'wendang/notifier/wxjs/customize/breadcrumbsize'},
            ]
          },
          {text:'API',link:'wendang/notifier/wxjs/api/index',
            items:[
              {text:'init',link:'wendang/notifier/wxjs/api/init'},
              {text:'set',link:'wendang/notifier/wxjs/api/set'},
              {text:'test',link:'wendang/notifier/wxjs/api/test'},
              {text:'notify',link:'wendang/notifier/wxjs/api/notify'},
              {text:'notifyError',link:'wendang/notifier/wxjs/api/notifyerror'},
              {text:'notifyHttpError',link:'wendang/notifier/wxjs/api/notifyhttperror'},
            ]
          },
          {text:'小程序框架',link:'wendang/notifier/wxjs/framework/index',
            items:[
              {text:'mpvue',link:'wendang/notifier/wxjs/framework/mpvue'},
              {text:'WePY',link:'wendang/notifier/wxjs/framework/wepy'},
              {text:'Taro',link:'wendang/notifier/wxjs/framework/taro'},
            ]
          },
          {text:'Source Map',link:'wendang/notifier/wxjs/sourcemap/index',
            items:[
              {text:'Source Map简介',link:'wendang/notifier/wxjs/sourcemap/introduction'},
              {text:'下载Source Map',link:'wendang/notifier/wxjs/sourcemap/download'},
              {text:'上传Source Map',link:'wendang/notifier/wxjs/sourcemap/upload/index'},
            ]
          },
          {text:'插件版本',link:'wendang/notifier/wxjs/version'},
          {text:'其他',link:'wendang/notifier/wxjs/other/index',
            items:[
              {text:'write wx is not allowed',link:'wendang/notifier/wxjs/other/non_writable'},
              {text:'避免干扰console打印',link:'wendang/notifier/wxjs/other/avoid_disturb_console'},
              {text:'配置浏览器Blackboxing',link:'wendang/notifier/wxjs/other/browser_blackboxing_fundebug'},
            ]
          }
        ]
      },
      {text:'常见问题',link:'questions'},
      {text:'其他',link:'wendang/other/index',
        items:[
          {text:'事件数是如何定义的',link:'wendang/other/event_number'},
        ]
      }
    ],
  

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
