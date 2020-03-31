var fruits = ["Apple","Orange","Grapes","Mango","Kiwi"]
for (var i = 0; i < fruits.length; i++) {
    console.log("Fruits ",fruits[i]) ;
    
}
console.log("*********************")
// for of loop and its not a index base its simply retriews
for (var fruit of fruits) {
    console.log("Using for of ",fruit)
}
console.log("*********************")

//for in loop we can also use for object
for (var index in fruits ) {
    console.log("Index is :",index)
    console.log("Fruit",fruits[index])
}

var person = {
    name: 'priyanka',
    college :'APS',
    bf : false
}
console.log("*********************")

//using for Object
for (const key in person) {
    console.log("Key is ",key)
    console.log("Value is ",person[key])
    //console.log(person.key)  -> it won't Work
}
("*********************")
//for each is function in fuction we can't use breake
fruits.forEach(function(value , index){
    console.log("Index is : ",index)
    console.log("Value is : ",value)
})

fruits.forEach(function(){
    /* console.log("Index is : ",index)
    console.log("Value is : ",value) */
    console.log("Hello")
})

