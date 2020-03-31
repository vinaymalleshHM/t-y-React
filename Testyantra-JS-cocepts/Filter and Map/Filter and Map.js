// var numbers = [100,200,300,400]

// var filterNumbers = numbers.filter(function(Val){
//     if (Val>200) {
//         return true
//     }
//     else{
//         return false
//     }
// })
// console.log("After filter ",numbers)
// console.log("After filter ",filterNumbers)

//Arrow 
// var filNumber = numbers.filter(val => val > 200)
// console.log("Filter Using Arrow ",filNumber)

console.log("*****************")
var mappedNumbers =numbers.map(function(val,index){
    val = val +50;
    return val;
})
console.log("After  Numbers ",numbers)
console.log("After Map ",mappedNumbers)

// var mapNumbers = numbers.map(val => val + 50)
// console.log("Using Arrow ",mapNumbers)
