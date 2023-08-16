const ora = require('ora')
const spinner = ora().start();

spinner.text = 'loading...'

setTimeout(() => {
  spinner.succeed('下载成功')
}, 3000)