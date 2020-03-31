//firsName = 'Bill' //dont write anything here

// use strict mode
//"use strict" ////it should be in first line

/* firstName = 'Bill' //error
lastName = 'gates'
console.log('firstName ',firstName)
console.log('lastName ',lastName) */

/* var fname = 'mike'; //erorr
var fname = 'Jack' ;
 */
function display(){
    console.log('This is ',this)
    console.log('Display function')
}
display();

 function showData(){
//this is undifened in strict mode for functions
//which is called like a normal 

     //if u want it in only to a particular function
    "use strict" //it should be in first line
    console.log("This is ",this)
    console.log('showData function')
   // this.data = 'hellow' // error bcz we  are calling a normal functon in strict mode
}
showData();
new showData();