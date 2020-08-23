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