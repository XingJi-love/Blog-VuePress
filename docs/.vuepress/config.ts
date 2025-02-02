import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'XINGJI',
  description: '迄今所有人生都大写着失败，但不妨碍我继续向前✨',
  head: [
    ['link',{ rel: 'icon', href: 'https://i.p-i.vip/47/20241024-67192acae3bb8.png'}],
  ],

  bundler: viteBundler(),

  theme: plumeTheme({
    // 添加您的部署域名
    // hostname: 'https://your_site_url',

    // 全站加密
    //encrypt: {
      //global: true,
      //admin: ['123456'],
    //},

    blog: {
      // 配置 封面图 布局位置
      // postCover: 'left', // 'left' | 'right' | 'odd-left' | 'odd-right' | 'top'
      postCover: {
        layout: 'odd-left',
        ratio: '16:9',
        width: 300,
        compact: true
      }
    },

    plugins: {

      // 隐藏文本配置
      markdownPower: {
        plot: true,
      },

      /**
       * Shiki 代码高亮
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */
      // shiki: {
           // 强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
      //   languages: ['shell', 'bash', 'typescript', 'javascript'],
      // },

      /**
       * 搜索搜索
       * @see https://theme-plume.vuejs.press/config/plugins/search/
       */
      search: {
        // more options
      },

      /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      markdownEnhance: {
        demo: true,
        //chart: true,
        echarts: true,
        mermaid: true,
        flowchart: true,
      //   include: true,
      //   chart: true,
      //   echarts: true,
      //   mermaid: true,
      //   flowchart: true,
      },

      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       */
      // markdownPower: {
      //   pdf: true,
      //   caniuse: true,
      //   plot: true,
      //   bilibili: true,
      //   youtube: true,
      //   icons: true,
      //   codepen: true,
      //   replit: true,
      //   codeSandbox: true,
      //   jsfiddle: true,
      //   repl: {
      //     go: true,
      //     rust: true,
      //     kotlin: true,
      //   },
      // },

      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      comment: {
           provider: 'Waline', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
            comment: true,
            serverURL: 'https://waline.xingji.fun', // your own server URL
      //   repo: '',
      //   repoId: '',
      //   categoryId: '',
      //   mapping: 'pathname',
      //   reactionsEnabled: true,
      //   inputPosition: 'top',
      },
    },
  }),
})
