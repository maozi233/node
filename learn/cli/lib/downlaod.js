const downlaod = require('download-git-repo');
const ora = require('ora');
const chalk = require('chalk')

function downloadFn(url, projectName) {
  const spinner = ora().start();
  spinner.text = '代码下载中...'
  downlaod(url, projectName, { clone: true }, function(e) {
    if (e) {
      spinner.fail(`下载失败: ${e.message}`)
    } else {
      spinner.succeed('下载成功')
      console.log(chalk.blue(`请cd到${projectName}目录中`))
      console.log(chalk.green('npm install'))
      console.log(chalk.yellow.bold('npm run dev'))
    }
  })
}

module.exports = downloadFn