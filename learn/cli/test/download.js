var downlaod = require('download-git-repo');

// const username = 13720304556;
// const password = 'yaoweizxc233'
const url = `direct:https://gitee.com/maoziwocao/webpack-learn.git`

downlaod(url, './xxx', { clone: true }, console.error)