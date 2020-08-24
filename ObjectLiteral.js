var person={
    name:'shadi',
    age:16,
    place:'calicut',
    display:function(){
        var name='subaida'
        console.log(name)
    }

}
//console.log(person.name) 
for(x in person){
    console.log(person[x])
}

console.log(person.display())

//we can add to this Object Properties And Method

person.dob="12-3-20"

console.log(person.dob)

person.displayAge=function(){
    console.log(this.age)

}
console.log(person.displayAge())