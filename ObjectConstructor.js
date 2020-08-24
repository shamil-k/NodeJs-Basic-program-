function Person(name,age,place){
    this.name=name
    this.age=age
    this.place=place
    this.display=function(){
        console.log("Name:"+this.name+" "+"Age:"+this.age+" "+"place:"+this.place)
    }
}
var aazim=new Person('aazim',20,'ernakulam')
var althaf=new Person('althaf',22,'mudickal')

aazim.display()
althaf.display()