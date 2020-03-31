//var variaable are  host in top  

console.log(personName)
var personName = "Venki"
console.log("Name is ",personName)

//function var variaable are host top of the function of that function 


function hoist(){
    console.log(message)
    var message = "JavaScript is Very easy!!!!"
    console.log(message)

}
hoist();