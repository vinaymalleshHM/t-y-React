//Named Function
function circumference(r){
    var area = Math.PI * r * r ;
    console.log("the Area of Circle ",area)
    var circum= Math.PI * r * 2 ;
    console.log("circumference of Circle ",circum)
}
circumference(2.5);

//Ananymous Function
var circle = function(r){
    var area = Math.PI * r * r ;
    console.log("the Area of Circle ",area)
    var circum= Math.PI * r * 2 ;
    console.log("circumference of Circle ",circum)
}
circle(2.5);

//IIFE Function
(function(r){
    var area = Math.PI * r * r ;
    console.log("the Area of Circle ",area)
    var circum= Math.PI * r * 2 ;
    console.log("circumference of Circle ",circum)
})(2.5);

//Arrow Function
var raduis = r => {
    var area = Math.PI * r * r ;
    console.log("the Area of Circle ",area)
    var circum= Math.PI * r * 2 ;
    console.log("circumference of Circle ",circum)
}
raduis(2.5)