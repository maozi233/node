// 问答工具
const inquirer = require('inquirer');
const donwlaodFn = require('./downlaod');

const createApp = async (projectName, args) => {
  console.log(projectName, args);
  const answer = await inquirer.prompt([
    // {
    //   type:'input',
    //   name: 'projectName',
    //   message: '项目名称'
    // },
    {
      type: 'list',
      name: 'framwork',
      choices: ['express', 'koa', 'egg'],
      message: '请选择你想用的框架'
    }
  ])

  console.log(answer)
  const url = `direct:https://gitee.com/maoziwocao/webpack-learn.git`
  donwlaodFn(url, projectName)
}

module.exports = {
  createApp
}