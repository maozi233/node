const inquirer = require('inquirer');

const createApp = (projectName, args) => {
  // console.log(projectName, args);
  inquirer.prompt([
    // {
    //   type:'input',
    //   name: 'username',
    //   message: '你的名字'
    // }
    {
      type: 'list',
      name: 'framwork',
      choices: ['express', 'koa', 'egg'],
      message: '请选择你想用的框架'
    }
  ])
    .then(answer => {
      console.log(answer);
    })
}

module.exports = {
  createApp
}