var http = require('http')

var server = http.createServer()

server.listen(8899, () => {
  console.log('http://127.0.0.1:8899')
})

server.on('request', function(req, res) {
  // console.log(req)
  res.write('<div>8889</div>')
  res.end()
})