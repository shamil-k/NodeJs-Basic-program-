function hello(){
   var i=0
    let a=20

    if(i===0){
        var i = 1
        
        var b = 50
        let a = 30


    }
    console.log(i)
    console.log(a)
    console.log(b)


    function Display(){
       var i = 2  //this var scope only inside Display function
    }
     Display()
     console.log(i)
  
}
hello()