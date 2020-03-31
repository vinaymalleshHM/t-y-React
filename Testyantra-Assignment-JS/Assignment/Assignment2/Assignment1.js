//Named Function

function fact(a){
    if (a==0) 
        return 1;
     else
        return(a*fact(a-1))
}
var a = fact(5)
console.log(a)

//Ananymous Function


var b = function(a){
    if (a==0) 
        return 1;
     else
        return(a*fact(a-1))
}
var c = b(5);
console.log(c);


//IIFE

(function(a){
    var num = 1
    if (a==0) 
        console.log(1)
     else
        for (let i = a; i > 0; i--) {
            num =num *i;
        }
        console.log(num)
})(5);

//Arrow Function

var d = a => {
    if (a==0) 
    return 1;
 else
    return(a*fact(a-1))
}
var e = d(5);
console.log(e);