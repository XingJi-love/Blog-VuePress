---
home: true
config:
  -
    type: banner
    banner: https://www.loliapi.com/acg
    bannerMask:
      light: 0.1
      dark: 0.3
    hero:
      name: XINGJI
      tagline: Front End Developer
      text: 迄今所有人生都大写着失败，但不妨碍我继续向前✨
      actions:
        -
          text: 我的博客
          link: /blog/
          theme: brand
        -
          text: Github
          link: https://github.com/XingJi-love
          theme: alt
  -
    type: profile
    name: XINGJI
    description: 迄今所有人生都大写着失败，但不妨碍我继续向前✨
    avatar: https://i.p-i.vip/47/20241024-67192acae3bb8.png

  -
    type: features
    features:
      -
        title: 响应式布局
        icon: 💻
        details: 适配移动设备，PC，平板
      -
        title: 博客 & 文档
        icon: 📖
        details: 无论是想写博客，或想写产品文档，或者两者兼顾
      -
        title: 开箱即用
        icon: 🚀
        details: 支持零配置即可使用，也支持丰富的自定义配置
      -
        title: 多语言
        icon: ⚖
        details: 内置了 中文/英文支持，还可以自定义添加更多的语言支持
      -
        title: 双色主题
        icon: 👨‍💻
        details: 支持 浅色/深色 主题，包括代码高亮
      -
        title: 插件
        icon: 📦
        details: 内置丰富的插件，一站式解决网站一般需求
      -
        title: 搜索、评论
        icon: 🔍
        details: 支持多种评论系统，支持本地搜索、Algolia搜索
      -
        title: 加密
        icon: 🔒
        details: 支持全站加密、部分加密（加密目录、加密文章）
      -
        title: Markdown 增强
        icon: 📝
        details: 支持 Markdown 语法，支持 代码块分组、提示容器、任务列表、数学公式、代码演示等
  -
    type: image-text
    title: 功能
    description: 内置丰富的功能，满足网站一般需求。
    image: https://i.p-i.vip/47/20241024-67192acae3bb8.png
    list:
      -
        title: 文章信息
        description: 为文章添加标签、分类、字数统计、阅读时间、写作日期等信息。
      -
        title: 评论
        description: 支持 4 种评论系统，你可以自由选择符合你的需求的评论系统。
      -
        title: 搜索
        description: 支持基于 minisearch 的本地搜索， 支持Algolia搜索。
      -
        title: 加密
        description: 支持全站加密、部分加密（加密目录、加密文章）。
      -
        title: 代码复制
        description: 一键复制代码块中的内容
  -
    type: text-image
    title: 博客
    description: 主题默认支持博客，生成你的个人博客。
    image: https://i.p-i.vip/47/20241024-67192acae3bb8.png
    list:
      -
        title: 文章列表
        description: 通过文章写作日期，自动排序并生成博客文章列表页。
      -
        title: 博主信息
        description: 自定义名称、座右铭、头像，社交媒体链接。
      -
        title: 标签、归档
        description: 自动生成标签页，为文章根据年份进行归档。

  -
    type: custom

---
### 安装

:::code-tabs
@tab pnpm
```sh
pnpm add vuepress@next vuepress-theme-plume vue
```
@tab npm
```sh
npm install vuepress@next vuepress-theme-plume
```
@tab yarn
```sh
yarn add vuepress@next vuepress-theme-plume
```
:::