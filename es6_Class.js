class Hello{
    constructor(num1,num2){
        this.num1=num1
        this.num2=num2
    }
    hello(){
        console.log(this.num1+this.num2)
    }
}

var obj = new Hello(10,20)
obj.hello()