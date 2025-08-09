/*
 * @Author: ChenxiMoon 2403133073@qq.com
 * @Date: 2025-08-08 22:54:29
 * @LastEditors: ChenxiMoon 2403133073@qq.com
 * @LastEditTime: 2025-08-09 13:30:17
 * @FilePath: \f:\Zmk\DailyNotes\docs\.vuepress\config.js
 * @Description: 使用自动侧边栏配置
 */

import { defineUserConfig } from 'vuepress'
import themeDefaultPkg from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

const defaultTheme = themeDefaultPkg.default || themeDefaultPkg

export default defineUserConfig({
  lang: 'zh-CN',
  title: '我的笔记',
  description: '每日学习记录',

  theme: defaultTheme({
    navbar: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about/' },
    ],
    // 使用自动侧边栏
    sidebar: 'auto',
  }),

  bundler: viteBundler(),
})