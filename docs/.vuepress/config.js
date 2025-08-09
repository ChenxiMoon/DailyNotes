/*
 * @Author: ChenxiMoon 2403133073@qq.com
 * @Date: 2025-08-08 22:54:29
 * @LastEditors: ChenxiMoon 2403133073@qq.com
 * @LastEditTime: 2025-08-09 13:22:39
 * @FilePath: \undefinedf:\Zmk\DailyNotes\docs\.vuepress\config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
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
    sidebar: [
      '/',
      '/guide/',
      '/about/',
    ],
  }),

  bundler: viteBundler(),
})
