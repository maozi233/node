#! /usr/bin/env node

// console.log('cli called', process.argv);
// const params = process.argv[2];
// 命令行工具
const { program } = require('commander');

const actions = require('../lib/actions');

program.option('-f, --framwork <framwork>', '设置框架')

program
  .command('create <project-name>')
  // .command('create <project-name> [other...]')
  // .alias('crt')
  .description('创建项目')
  .action(actions.createApp)

program.parse(process.argv)