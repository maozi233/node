const fs = require('fs');
fs.writeFile('a.txt', 'now: ' + new Date().valueOf(), function(err) {
  console.error(err)
})