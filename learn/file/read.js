const fs = require('fs');
// console.log(fs);

(async function () {
  try {
    const res = await fs.readFileSync('./a.txt', {
      encoding: 'utf-8'
    });
    console.log(res)
  } catch (e) {
    console.error(e)
  }
})()