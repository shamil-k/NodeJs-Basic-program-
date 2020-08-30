const express = require('express')
const path = require('path')

const app = express()

//Root Creating using Express Module
app.get('/',(req,res,)=> res.send('hello welcome to express server creation'))




//Creating Middlewar using app.use
app.use(function(req,res,next){
console.log('request started')
next()
})


//for Getting html form 
app.get('/signup',function(req,res){
res.sendFile(path.join(__dirname,'form.html'))
})


app.post('/signup',(req,res)=>
res.send('Account Created')
)


app.listen(3000,()=>
    //console.log(__filename)
    console.log('server running'))