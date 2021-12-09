// const path = require('path')
// function resolve (dir) {
//   return path.join(__dirname, '../../', dir)
// }

module.exports = {
  title: '前端开发笔记',
  description: 'Welcome to Doc',
  base: '/VuePressDoc/',
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.png'
    }],
  ],
  // dest: './dist', 
  port: 6868, //端口号  

  //主题配置
  //主题配置
  themeConfig: {
    displayAllHeaders: true,
    sidebarDepth: 3,
    nav: [{
        text: '主页',
        link: '/'
      },
      {
        text: '使用说明',
        link: '/guide/quickStart'
      }, 
      {
        text: '前端笔记',
        link: '/pages/bigScreen/docScreen'
      },
    ],
    sidebar: {  
      '/pages/': [{
        title: '介绍',
        collapsable: true,
        children: [{
          title: '常用工具',
          path: 'utils/utils',
          collapsable: true,
        },{
          title: '大屏模块',
          path: 'bigScreen/docScreen' 
        },{
            title: 'Vue.js',
            path: 'vue/vue' 
          },
          {
            title: 'css',
            path: 'css/cssAnimo',
            collapsable: false,
          },
          {
            title: 'echarts图表',
            path: 'echarts/echarts',
            collapsable: false,
          } 
        ]
      }], 
      '/guide/': [{
        title: '使用说明',
        collapsable: false,
        children: [{
            title: '最新更新日志',
            path: 'updateLog',
            collapsable: false,
          },
          {
            title: '指南初衷与诞生',
            path: 'introduction',
            collapsable: false,
          },
          {
            title: '快速上手',
            path: 'quickStart',
            collapsable: false,
          },
          {
            title: '模板说明',
            path: 'tips',
            collapsable: false,
          }
        ]
      }]
    },
    sidebarDepth: 1, // 将同时提取markdown中h2，显示在侧边栏上
    lastUpdated: '最后更新于' // 文档更新时间：每个文件git最后提交的时间
  },

  markdown: {
    // lineNumbers: true // 代码块显示行号
  },

  plugins: [
    // 官方回到顶部插件
    '@vuepress/back-to-top',

    //官方图片放大组件 目前是所有img都可以点击放大。具体配置见https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-medium-zoom.html
    ['@vuepress/medium-zoom', {
      selector: 'img'
    }],
  ]
  // vuepress里修改webpack配置，使用的是chainWebpack进行链式调用
  //   https://github.com/neutrinojs/webpack-chain/tree/v5
  // chainWebpack: (config, isServer) => {
  //   config.resolve.alias
  //     .set('@',resolve('src'))
  // }
};