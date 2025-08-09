export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/Zmk/DailyNotes/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"欢迎来到我的笔记"} }],
  ["/%E6%88%91%E6%98%AFDailyNotes.html", { loader: () => import(/* webpackChunkName: "我是DailyNotes.html" */"F:/Zmk/DailyNotes/docs/.vuepress/.temp/pages/我是DailyNotes.html.js"), meta: {"title":"我是DailyNotes"} }],
  ["/%E6%88%91%E6%98%AF%E6%96%B0%E5%88%9B%E5%BB%BA%E7%9A%84%E6%96%87%E4%BB%B6%20%E8%AF%95%E4%B8%80%E4%B8%8B%E6%9C%AC%E5%9C%B0%E5%88%9B%E5%BB%BA%E6%96%87%E4%BB%B6%E4%BC%9A%E4%B8%8A%E4%BC%A0github%E5%90%97.html", { loader: () => import(/* webpackChunkName: "我是新创建的文件 试一下本地创建文件会上传github吗.html" */"F:/Zmk/DailyNotes/docs/.vuepress/.temp/pages/我是新创建的文件 试一下本地创建文件会上传github吗.html.js"), meta: {"title":"我是新创建的文件 试一下本地创建文件会上传github吗"} }],
  ["/%E8%8B%B1%E8%AF%AD.html", { loader: () => import(/* webpackChunkName: "英语.html" */"F:/Zmk/DailyNotes/docs/.vuepress/.temp/pages/英语.html.js"), meta: {"title":"英语进度打卡"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"F:/Zmk/DailyNotes/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
