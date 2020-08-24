class Sample{
      Sample(){
        console.log("iam in base class")
    }
}



class Hello extends Sample{
    constructor(num1,num2){
        super()
        this.num1=num1
        this.num2=num2
    }
    hello(){
        console.log(this.num1+this.num2)
    }
}

let obj = new Hello(10,20)
obj.hello()
obj.Sample()