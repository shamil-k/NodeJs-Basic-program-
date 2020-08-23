var r = require('readline-sync')

num1 = r.question("Enter Two numbers:")
num2 = r.question("")
if(num1>num2){

    console.log("larger is "+num1)
}else if(num1===num2){
    console.log("numbers are same")
}else{
    console.log("larger is"+num2)
}
