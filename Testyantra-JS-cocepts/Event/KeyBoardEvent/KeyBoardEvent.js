const element = document.getElementById("one")
element.onkeydown = function(){
    console.log("triggered")
}

//writing events using addEventListener

/* const second = document.getElementById("two")
second.addEventListener("keyup",function(){
    
    console.log("Key UP")
})
 */
let pEle = document.createElement("p")
const second = document.getElementById("two")
second.addEventListener("keyup",function(){

    console.log(second.value)
    //console.log(second.textContent)
    pEle.textContent =second.value
    document.body.appendChild(pEle)
})

const three = document.getElementById("three")
three.addEventListener("keyup", function(){
    console.log(three.value)

   let four = document.getElementById("four")
   four.textContent = three.value;


})