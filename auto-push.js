const chokidar = require('chokidar');
const { exec } = require('child_process');
const path = require('path');

const projectRoot = path.resolve(__dirname); // 脚本所在目录，一般放项目根目录
const watcher = chokidar.watch('docs', {
  ignored: /(^|[\/\\])\../, // 忽略隐藏文件和文件夹
  persistent: true,
});

let timeout = null;

watcher.on('all', (event, filePath) => {
  console.log(`文件变化: ${event} -> ${filePath}`);

  if (timeout) clearTimeout(timeout);
  timeout = setTimeout(() => {
    console.log('开始执行 git add、commit 和 push ...');

    const execOptions = { cwd: projectRoot };

    exec('git add -A', execOptions, (err, stdout, stderr) => {
      if (err) {
        console.error('git add 失败:', err);
        return;
      }
      console.log('git add 成功');

      exec('git commit -m "docs: 自动更新文档"', execOptions, (err2, stdout2, stderr2) => {
        if (err2) {
          // 可能无变化导致无法提交
          if (
            stderr2.includes('nothing to commit') ||
            stderr2.includes('没有要提交的更改')
          ) {
            console.log('无新的变动，跳过提交');
          } else {
            console.error('git commit stdout:', stdout2);
            console.error('git commit stderr:', stderr2);
            console.error('git commit 失败:', err2);
          }
          return;
        }
        console.log('git commit 成功:', stdout2);

        exec('git push origin main', execOptions, (err3, stdout3, stderr3) => {
          if (err3) {
            console.error('git push 失败:', err3);
            console.error('git push stdout:', stdout3);
            console.error('git push stderr:', stderr3);
          } else {
            console.log('git push 成功！');
          }
        });
      });
    });
  }, 2000);
});

console.log('自动提交推送监听已启动，正在监控 docs 目录...');
