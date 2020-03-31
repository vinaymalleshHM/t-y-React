//Named Function
//add(5,5) we can call before declarertion using named 
// function add(a,b){
//     var sum = a+b; 
// console.log("Sum is ",sum)
    
// }
//add(5,6)

// function check(n){ // here we are not passin argu 
// console.log("N value is : ",n)
// }

// check();

// function test(){//passing a argu but its not considering bcz the func does not contain parameter
//     console.log("Test Function")
// }
// test(56);

// function multiply(n1,n2){
//     return n1*n2;

// }
// var mul = multiply(10,10);
// console.log("Product ",mul)


// //Anonymous Function or Function Expression

// var division = function(x,y){
//     return x/y;
// }
// var d  = division(25,5);
// console.log("Value is ",d);

//Self Invoked Function or IIFE (Immediately Invoked Functon Expression) 
//while declaring a IIfe before and after should  give semiclon to recognize the func jsEngine

// (function(p,q){
//     console.log("Value is :", p-q)

// })(12,5);

//Arrow Function

/* var addition = (a,b,c)=>{
               return a+b+c
              }      
var x = addition(10,20,30);
console.log("X Value is "+x)  */ 

//or

// var addition = (a,b,c)=> a+b+c     
// var x = addition(10,20,40);
// console.log("X Value is "+x) 

/* var sqr = (a) =>a*a 
console.log("Square of Number ",sqr(5));
 */    

//  //or

//  var sqr = a =>a*a 
// console.log("Square of Number ",sqr(5))


// var greet = () => console.log("Good evening")
// greet();

             