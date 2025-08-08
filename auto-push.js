/*
 * @Author: ChenxiMoon 2403133073@qq.com
 * @Date: 2025-08-08 23:15:16
 * @LastEditors: ChenxiMoon 2403133073@qq.com
 * @LastEditTime: 2025-08-09 01:13:04
 * @FilePath: \undefinedf:\Zmk\DailyNotes\auto-push.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const chokidar = require('chokidar');
const { exec } = require('child_process');
const path = require('path');

const projectRoot = path.resolve(__dirname); // 脚本所在目录，一般放项目根目录
const watcher = chokidar.watch('F:\\Zmk\\DailyNotes', {
  ignored: /(^|[\/\\])\../,
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
        console.error(stderr);
        return;
      }
      console.log('git add 成功');
      if (stdout) console.log('git add 输出:', stdout);
      if (stderr) console.log('git add 错误输出:', stderr);

      exec('git commit -m "docs: 自动更新文档"', execOptions, (err2, stdout2, stderr2) => {
        if (err2) {
          if (
            stderr2.includes('nothing to commit') ||
            stderr2.includes('没有要提交的更改')
          ) {
            console.log('无新的变动，跳过提交');
          } else {
            console.error('git commit 失败:', err2);
            console.error('git commit stdout:', stdout2);
            console.error('git commit stderr:', stderr2);
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
            if (stdout3) console.log('git push 输出:', stdout3);
            if (stderr3) console.log('git push 错误输出:', stderr3);
          }
        });
      });
    });
  }, 2000);
});

console.log('自动提交推送监听已启动，正在监控 docs 目录...');
