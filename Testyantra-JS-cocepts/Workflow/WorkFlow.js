/* function first(){
    console.log("First Func")
}
function second(){
    console.log("Second Func")
}

first();
second(); */


/* function first(){
    setTimeout(function(){
        console.log("First Func")
    },0)
    console.log("First function Finished")
   
}
function second(){
    console.log("Second Func")
}

first();
second(); */

//Callback Function
function first(callback){
    setTimeout(function(){
        console.log("First Func")
        callback();
    },0)
    console.log("First function Finished")
   
}
function second(){
    console.log("Second Func")
}
first(second);
