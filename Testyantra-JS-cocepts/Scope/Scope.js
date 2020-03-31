//var keyword

//global scope variavles
var a = 10;

function check(){
    //laocal Scope Variables

    var b = 20;
    //console.log("B value is ",b)

}
check();
// console.log("B value is ",b) //error

for (var i = 0; i < 5; i++) {
    
    
}
console.log("i Value is ", i)

//console.log('X value is ',x) //no concept of Hoisting
//let keyword
let x = 10;
//let x = 20;  //ReDeclaretion is Not  Possible

x=30;  //ReAssigning is possible
console.log('X value is ',x)

function test(){
    let y = 10;
    console.log("y value is ",y )

}
test();
//console.log("y value is ",y ) //functional scope


for (let j = 0; j < 5; j++) {

    console.log(" J value ",j)
    
}
//console.log(j) // Block Scope

//const 

//Global Scope

//const p;  // only Declaration Not possible
//const p = 10 ;
const p = 20; // No ReDeclaration
// p = 20;  // No ReAssigning

const items = ["Watch","Shoe","Chacolate","Mobile"]
items.push("laptops") //Here Assignment (=) Operator is Not Using
console.log("Items ", items)

 // items = []; // No ReAssignment

const person = {
    name : 'Dimple'
}
console.log("Peson ",person)

/* 
person = {
    name : 'Dimple'

}
  */
person.name = 'Pooja Hegde'

console.log("Peson ",person)


