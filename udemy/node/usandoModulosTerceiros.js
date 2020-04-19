const _ = require('lodash')
setInterval(() => console.log(_.random(1, 1000)),1000)

const http = require('http')
http.createServer((req, res) => {
    res.write("Bom dia...!!!")
    res.end()
}).listen(8080)