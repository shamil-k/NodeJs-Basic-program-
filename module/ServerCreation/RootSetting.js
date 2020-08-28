var http = require('http')
var fs = require('fs')
var url = require('url')
http.createServer(function(req,res){

    var q = url.parse(req.url,true)
   // console.log(q.pathname)
     if(q.pathname==='/'){

    fs.readFile('hi.html',function(err,data){
    res.write(data)
    res.end()
    })


}else if(q.pathname==='/login'){
    fs.readFile('form.html',function(err,hi){
        res.writeHead(200,{'Content-type':'text/html'})
        res.write(hi)
        res.end()
    })
}else if(q.pathname==='/loginaction'){
    console.log(q.query)
    res.writeHead(200,{'Content-type':'text/html'})
    res.write('<h1>'+"Hi"+ " "+q.query.fname+" "+"Welcome to Server"+'</h1>')
    res.end()
}
else{
    res.writeHead(404,{'Content-type':'html/text'})
    res.write('error')
    res.end()
}
}).listen(7000,() => console.log('server running'))