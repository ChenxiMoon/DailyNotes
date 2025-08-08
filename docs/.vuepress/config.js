/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2025-08-08 22:54:29
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2025-08-08 22:55:10
 * @FilePath: \undefinedf:\Zmk\DailyNotes\docs\.vuepress\config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineUserConfig, defaultTheme } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '我的笔记',
  description: '每日学习记录',

  theme: defaultTheme({
    navbar: [],
    sidebar: [],
  }),

  bundler: viteBundler(),
})
