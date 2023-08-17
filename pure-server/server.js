var http = require('http')
var fs = require('fs')
var url = require('url')

var server = http.createServer()

server.listen(8899, () => {
  console.log('http://127.0.0.1:8899')
})

server.on('request', async function (req, res) {
  // console.log(req)

  // res.setHeader('Content-type','text/html;charset=utf-8')
  // res.write('<h1>8889</h1>')
  // res.end()
  // console.log('req.url = ', req.url)

  if (req.method == 'GET') {
    const { pathname, query } = url.parse(req.url, true)
    // console.log(pathname, query)
    if (req.url == '/') {
      var html = await fs.readFileSync('./index.html')
      res.write(html)
      res.end()
    }
    else if (req.url.indexOf('.png') !== -1) {
      console.log(req.url)
      var img = await fs.readFileSync(`.${req.url}`)
      // console.log(img)
      res.end(img)
    }
  } else if (req.method == 'POST') {
    var result = ''
    req.on('data', function (data) {
      result += data
    })
    req.on('end', function () {
      console.log(require('querystring').parse(result))
    })
  }
})