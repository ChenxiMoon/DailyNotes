const chokidar = require('chokidar');
const { exec } = require('child_process');

const watcher = chokidar.watch('docs', {
  ignored: /(^|[\/\\])\../, // 忽略点文件
  persistent: true,
});

let timeout = null;

watcher.on('all', (event, path) => {
  console.log(`文件变化: ${event} -> ${path}`);

  if (timeout) clearTimeout(timeout);
  // 防抖，避免频繁提交
  timeout = setTimeout(() => {
    console.log('开始执行 git add、commit 和 push ...');

    exec('git add docs', (err) => {
      if (err) {
        console.error('git add 失败:', err);
        return;
      }
      exec('git commit -m "docs: 自动更新文档"', (err2, stdout, stderr) => {
        if (err2) {
          if (
            stderr.includes('nothing to commit') ||
            stderr.includes('没有要提交的更改') // 兼容中文git提示
          ) {
            console.log('无新的变动，跳过提交');
          } else {
            console.error('git commit 失败:', err2);
            return;
          }
        } else {
          console.log('git commit 成功:', stdout);
        }

        exec('git push origin main', (err3, stdout3, stderr3) => {
          if (err3) {
            console.error('git push 失败:', err3);
          } else {
            console.log('git push 成功！');
          }
        });
      });
    });
  }, 2000); // 2秒防抖
});

console.log('自动提交推送监听已启动，正在监控 docs 目录...');
