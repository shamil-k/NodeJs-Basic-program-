var http = require('http')

http.createServer(server).listen(7000)

function server(req,res){
    res.write('Welcome To Shadiya Manzil')
    res.end()
}

//same code
/*var http = require('http')

http.createServer(function(req,res){
    res.write('hi iam shadi')
    res.end()

}).listen(7000)*/