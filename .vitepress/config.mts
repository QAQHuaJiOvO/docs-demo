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
      {text:'JavaScript',link:'/wendang/notifier/javascript/index.md',
        items:[
          {text:'接入插件',link:'/wendang/notifier/javascript/integration/index',
            collapsed: true,
            items:[
              {text:'NPM',link:'/wendang/notifier/javascript/integration/npm.md'},
              {text:'SetSystemInfo',link:'/wendang/notifier/javascript/integration/requirejs.md'},
              {text:'SetLocation',link:'/wendang/notifier/javascript/integration/dynamical.md'},
            ]
          },
          {text:'测试插件',link:'/wendang/notifier/javascript/test.md'},
          {text:'录屏',link:'/wendang/notifier/javascript/revideo.md'},
          {text:'属性配置',link:'/wendang/notifier/javascript/customize/index.md',
            collapsed: true,
            items:[
              {text:'Apikey',link:'/wendang/notifier/javascript/customize/apikey.md'},
              {text:'Appversion',link:'/wendang/notifier/javascript/customize/appversion.md'},
              {text:'Breadcrumbsize',link:'/wendang/notifier/javascript/customize/breadcrumbsize.md'},
              {text:'Callback',link:'/wendang/notifier/javascript/customize/callback.md'},
              {text:'Bomain',link:'/wendang/notifier/javascript/customize/domain.md'},
              {text:'Filters',link:'/wendang/notifier/javascript/customize/filters.md'},
              {text:'Httptimeout',link:'/wendang/notifier/javascript/customize/httptimeout.md'},
              {text:'MaxEventNumber',link:'/wendang/notifier/javascript/customize/maxEventNumber.md'},
              {text:'MaxRevideoSizeInByte',link:'/wendang/notifier/javascript/customize/maxRevideoSizeInByte.md'},
              {text:'Metadata',link:'/wendang/notifier/javascript/customize/metadata.md'},
              {text:'Monitorhttpbody',link:'/wendang/notifier/javascript/customize/monitorhttpbody.md'},
              {text:'MonitorHttpResponse',link:'/wendang/notifier/javascript/customize/monitorHttpResponse.md'},
              {text:'Releasestage',link:'/wendang/notifier/javascript/customize/releasestage.md'},
              {text:'Samplerate',link:'/wendang/notifier/javascript/customize/samplerate.md'},
              {text:'Sensitives',link:'/wendang/notifier/javascript/customize/sensitives.md'},
              {text:'Silent',link:'/wendang/notifier/javascript/customize/silent.md'},
              {text:'Silentbehavior',link:'/wendang/notifier/javascript/customize/silentbehavior.md'},
              {text:'Silentconsole',link:'/wendang/notifier/javascript/customize/silentconsole.md'},
              {text:'Silentdev',link:'/wendang/notifier/javascript/customize/silentdev.md'},
              {text:'Silenthttp',link:'/wendang/notifier/javascript/customize/silenthttp.md'},
              {text:'Silentperformance',link:'/wendang/notifier/javascript/customize/silentperformance.md'},
              {text:'Silentpromise',link:'/wendang/notifier/javascript/customize/silentpromise.md'},
              {text:'Silentresource',link:'/wendang/notifier/javascript/customize/silentresource.md'},
              {text:'Silentvideo',link:'/wendang/notifier/javascript/customize.silentvideo.md'},
              {text:'Silentwebsocket',link:'/wendang/notifier/javascript/customize/silentwebsocket.md'},
              {text:'User',link:'/wendang/notifier/javascript/customize/user.md'},
            ]
          },
          {text:'API',link:'/wendang/notifier/javascript/api/index.md',
            collapsed: true,
            items:[
              {text:'Init',link:'/wendang/notifier/javascript/api/init.md'},
              {text:'Test',link:'/wendang/notifier/javascript/api/test.md'},
              {text:'Notify',link:'/wendang/notifier/javascript/api/notify.md'},
              {text:'NotifyError',link:'/wendang/notifier/javascript/api/notifyerror.md'},
              {text:'Leavebreadcrumb',link:'/wendang/notifier/javascript/api/leavebreadcrumb.md'},
            ]
          },
          {
            text:'前端框架',link:'/wendang/notifier/javascript/framework/index.md',
            items:[
              {text:'Vuejs',link:'/wendang/notifier/javascript/framework/vuejs.md'},
              {text:'React',link:'/wendang/notifier/javascript/framework/react.md'},
              {text:'Angularjs1',link:'/wendang/notifier/javascript/framework/angularjs1.md'},
              {text:'Angularjs2',link:'/wendang/notifier/javascript/framework/angularjs2.md'},
              {text:'Angularjs4',link:'/wendang/notifier/javascript/framework/angularjs4.md'},
              {text:'Ionic1',link:'/wendang/notifier/javascript/framework/ionic1.md'},
              {text:'Ionic2',link:'/wendang/notifier/javascript/framework/ionic2.md'},
              {text:'Cordova',link:'/wendang/notifier/javascript/framework/cordova.md'},
              {text:'gitbook',link:'/wendang/notifier/javascript/framework/gitbook.md'},
            ]
          },
          {text:'错误类型',link:'/wendang/notifier/javascript//type/index.md',
            items:[
              {text:'JavaScript 执行错误',link:'/wendang/notifier/javascript/type/javascript.md'},
              {text:'资源加载错误',link:'/wendang/notifier/javascript/type/resource.md'},
              {text:'HTTP请求错误',link:'/wendang/notifier/javascript/type/http.md'},
              {text:'unhandledrejection',link:'/wendang/notifier/javascript/type/unhandledrejection.md'},
              {text:'WebSockect连接错误',link:'/wendang/notifier/javascript/type/websocket.md'},
            ]
          },
          {text:'Source Map',link:'/wendang/notifier/javascript/sourcemap/index.md',
            items:[
              {text:'Source Map简介',link:'/wendang/notifier/javascript/sourcemap/introduction.md'},
              {text:'生成Source Map',link:'/wendang/notifier/javascript/sourcemap/generate/index.md',
                items:[
                  {text:'UglifyJS2',link:'/wendang/notifier/javascript/sourcemap/generate/uglify2.md'},
                  {text:'Grunt',link:'/wendang/notifier/javascript/sourcemap/generate/grunt.md'},
                  {text:'Gulp',link:'/wendang/notifier/javascript/sourcemap/generate/gulp.md'},
                  {text:'Webpack',link:'/wendang/notifier/javascript/sourcemap/generate/webpack.md'},
                  {text:'SystemJS',link:'/wendang/notifier/javascript/sourcemap/generate/systemjs.md'},
                ]
              },
              {text:'允许Fundebug下载Source Map文件',link:'/wendang/notifier/javascript/sourcemap/download.md'},
              {text:'上传Source Map',link:'/wendang/notifier/javascript/sourcemap/upload/index.md',
                items:[
                  {text:'通过前端UI上传Source Map',link:'/wendang/notifier/javascript/sourcemap/upload/ui.md'},
                  {text:'通过 API 上传 Source Map',link:'/wendang/notifier/javascript/sourcemap/upload/api.md'},
                  {text:'通过 fundebug-cli 批量上传 Source Map',link:'/wendang/notifier/javascript/sourcemap/upload/cli.md'},
                ]
              },
              {text:'删除 Source Map',link:'/wendang/notifier/javascript/sourcemap/delete/index.md',
                items:[
                  {text:'通过 API 删除 Source Map',link:'/wendang/notifier/javascript/sourcemap/delete/api.md'},
                  {text:'清空 Source Map',link:'/wendang/notifier/javascript/sourcemap/delete/cli.md'},
                ]
              },
            ]
          },
          {text:'敏感信息过滤',link:'/wendang/notifier/javascript/privacy/index.md'},
          {text:'插件版本',link:'/wendang/notifier/javascript/version.md'},
          {text:'其他',link:'/wendang/notifier/javascript/other/index.md',
            items:[
              {text:'浏览器“阻止载入混合活动内容”，录屏在开发环境无法正常显示',link:'/wendang/notifier/javascript/other/show_revideo_in_dev.md'},
              {text:'Script error.',link:'/wendang/notifier/javascript/other/script_error.md'},
              {text:'配置广告屏蔽插件',link:'/wendang/notifier/javascript/other/blocked.md'},
              {text:'避免干扰console打印',link:'/wendang/notifier/javascript/other/avoid_disturb_console.md'},
              {text:'配置浏览器[Ignore List]',link:'/wendang/notifier/javascript/other/browser_blackboxing_fundebug.md'},
              {text:'兼容莲子数据',link:'/wendang/notifier/javascript/other/lotuseed.md'},
              {text:'import 提升导致 Fundebug 报错：“请配置 apikey”',link:'/wendang/notifier/javascript/other//import_cause_fundebug_apikey_error.md'},
            ]
          },
        ]
      },
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
        text:'React Native',link:'/wendang/notifier/reactnative/index.md',
        items:[
          {text:'接入插件',link:'/wendang/notifier/reactnative/integration/index.md'},
          {text:'测试插件',link:'/wendang/notifier/reactnative/test.md'},
          {text:'属性配置',link:'/wendang/notifier/reactnative/customize/index.md',
            items:[
              {text:'apikey',link:'/wendang/notifier/reactnative/customize/apikey.md'},
              {text:'appVersion',link:'/wendang/notifier/reactnative/customize/appversion.md'},
              {text:'filters',link:'/wendang/notifier/reactnative/customize/filters.md'},
              {text:'metaData',link:'/wendang/notifier/reactnative/customize/metadata.md'},
              {text:'releaseStage',link:'/wendang/notifier/reactnative/customize/releasestage.md'},
              {text:'silent',link:'/wendang/notifier/reactnative/customize/silent.md'},
            ]
          },
          {text:'API',link:'/wendang/notifier/reactnative/api/index.md',
            items:[
              {text:'init',link:'/wendang/notifier/reactnative/api/init.md'},
              {text:'notify',link:'/wendang/notifier/reactnative/api/notify.md'},
              {text:'notifyError',link:'/wendang/notifier/reactnative/api/notifyError'},
            ]
          },
          {text:'插件版本',link:'/wendang/notifier/reactnative/version.md'},
        ]
      },

      {
        text:'Node.js',link:'/wendang/notifier/nodejs/index.md',
        items:[
          {text:'接入插件',link:'/wendang/notifier/nodejs/integration.md'},
          {text:'测试插件',link:'/wendang/notifier/nodejs/test.md'},
          {text:'属性配置',link:'/wendang/notifier/nodejs/customize/index.md',
            items:[
              {text:'apikey',link:'/wendang/notifier/nodejs/customize/apikey.md',},
              {text:'appVersion',link:'/wendang/notifier/nodejs/customize/appversion.md',},
              {text:'httpTimeout',link:'/wendang/notifier/nodejs/customize/httptimeout.md',},
              {text:'metaData',link:'/wendang/notifier/nodejs/customize/metadata.md',},
              {text:'releaseStage',link:'/wendang/notifier/nodejs/customize/releasestage.md',},
              {text:'silent',link:'/wendang/notifier/nodejs/customize/silent.md',},
              {text:'user',link:'/wendang/notifier/nodejs/customize/user.md',},
            ]
          },
          {text:'API',link:'/wendang/notifier/nodejs/api/index.md',
            items:[
              {text:'notifyError',link:'/wendang/notifier/nodejs/api/notifyerror.md'},
              {text:'notify',link:'/wendang/notifier/nodejs/api/notify.md'},
              {text:'config',link:'/wendang/notifier/nodejs/api/config.md'},
            ]
          },
          {text:'前端框架',link:'/wendang/notifier/nodejs/framework/index.md',
            items:[
              {text:'Express',link:'/wendang/notifier/nodejs/framework/express.md'},
              {text:'Koa',link:'/wendang/notifier/nodejs/framework/koa.md',},
              {text:'Hapi',link:'/wendang/notifier/nodejs/framework/hapi.md',},
            ]
          },
          {text:'插件版本',link:'/wendang/notifier/nodejs/version.md'},
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
      {
        text:'微信小游戏',link:'/wendang/notifier/wegame/index.md',
        items:[
          {text:'接入插件',link:'/wendang/notifier/wegame/integration.md',},
          {text:'测试插件',link:'/wendang/notifier/wegame/test.md',},
          {text:'属性配置',link:'/wendang/notifier/wegame/customize/index.md',
            items:[
              {text:'apikey',link:'/wendang/notifier/wegame/customize/apikey.md'},
              {text:'appVersion',link:'/wendang/notifier/wegame/customize/appversion.md'},
              {text:'filters',link:'/wendang/notifier/wegame/customize/filters.md'},
              {text:'httpTimeout',link:'/wendang/notifier/wegame/customize/httptimeout.md'},
              {text:'metaData',link:'/wendang/notifier/wegame/customize/metadata.md'},
              {text:'monitorHttpData',link:'/wendang/notifier/wegame/customize/monitorhttpdata.md'},
              {text:'releaseStage',link:'/wendang/notifier/wegame/customize/releasestage.md'},
              {text:'setLocation',link:'/wendang/notifier/wegame/customize/setlocation.md'},
              {text:'setSystemInfo',link:'/wendang/notifier/wegame/customize/setsysteminfo.md'},
              {text:'setUserInfo',link:'/wendang/notifier/wegame/customize/setuserinfo.md'},
              {text:'silent',link:'/wendang/notifier/wegame/customize/silent.md'},
              {text:'silentHttp',link:'/wendang/notifier/wegame/customize/silenthttp.md'},
            ]
          },
          {text:'API',link:'/wendang/notifier/wegame/api/index.md',
            items:[
              {text:'test',link:'/wendang/notifier/wegame/api/test.md'},
              {text:'notify',link:'/wendang/notifier/wegame/api/notify.md'},
              {text:'notifyError',link:'/wendang/notifier/wegame/api/notifyerror.md'},
            ]
          },
          {text:'插件版本',link:'/wendang/notifier/wegame/version.md',},
          {text:'其他',link:'/wendang/notifier/wegame/other/index.md',
            items:[
              {text:'避免干扰console打印',link:'/wendang/notifier/wegame/other/avoid_disturb_console.md'},
              {text:'配置浏览器[Blackboxing]',link:'/wendang/notifier/wegame/other/browser_blackboxing_fundebug.md'},
            ]
          },
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
