var hello = function(data){
    console.log("Data:"+data)
}

var show = function(callback){
    callback('Hello Shadiya')
}

show(hello)