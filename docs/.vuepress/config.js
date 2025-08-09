// docs/.vuepress/config.js
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '我的笔记',
  description: '每日学习记录',

  theme: defaultTheme({
    navbar: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about/' },
    ],
    sidebar: 'auto',
  }),

  bundler: viteBundler(),
})
