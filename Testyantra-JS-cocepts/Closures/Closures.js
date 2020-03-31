//here we calling inner function inside the outer fun
/* function outer(){
    let num = 10;
    function inner(){
        console.log("Number ",num)
    }
    inner();
}
outer(); */

//here we returning inner function inside the outer fun

function outer(){
    let num = 10;
    function inner(){
        console.log("Number ",num)
        //num = num++;
        num++;
    }
    return inner;
}

//inner();
let innerFunc = outer();
innerFunc();
innerFunc();
innerFunc();
