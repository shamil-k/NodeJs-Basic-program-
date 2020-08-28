var http = require('http')
var fs = require('fs')
const { type } = require('os')
http.createServer(function(req,res){
fs.readFile('form.html',function(err,data){
    res.writeHead(200,{'content-type':'text/html'})
    res.write(data)
    res.end()
})



}).listen(7000)