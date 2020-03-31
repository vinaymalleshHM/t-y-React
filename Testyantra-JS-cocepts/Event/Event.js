function greet(){
    alert("Welcome to javaScript")
}

let pEle = document.createElement("p");

pEle.textContent ="Dimple";

function elementCreation(){
    //let pEle = document.createElement("p");
    //pEle.textContent ="Dimple";
    document.body.appendChild(pEle);
    console.log(pEle)
}

function showData(){
    const ele = document.getElementById("show")
    console.log(ele.textContent)
}