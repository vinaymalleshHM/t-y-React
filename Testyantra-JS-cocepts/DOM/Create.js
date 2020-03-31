let element = document.createElement("p")
element.textContent = "JavaScript is Easy"
console.log(element)
console.log('Element TectConetent is -',element.textContent)
document.body.appendChild(element)

let pElement = document.getElementsByTagName("p")
console.log("pElement ",pElement)

const  ulElement  = document.createElement("ul")
ulElement.textContent = "LipStick"
const li1Element = document.createElement("li")
li1Element.textContent = 'Lakme';
const li2Element = document.createElement("li")
li2Element.textContent = 'Lorel';

ulElement.appendChild(li1Element);
ulElement.appendChild(li2Element);

console.log(ulElement) //you can print it in console u will get idea of how they are appended 

 document.body.appendChild(ulElement)

const  olElement  = document.createElement("ol")
olElement.textContent = "Bags"
const olliElement1 = document.createElement("li")
olliElement1.textContent = 'WildCraft';
const olliElement2 = document.createElement("li")
olliElement2.textContent = 'V3';
const olliElement3 = document.createElement("li")
olliElement3.textContent = 'skybsgs';

olElement.appendChild(olliElement1);
olElement.appendChild(olliElement2);
olElement.appendChild(olliElement3);

 console.log(olElement)

 document.body.appendChild(olElement)
// let button ;

    //1st logic 
let count= 1;
function add(){
    for (let i = 0; i < 10; i++) {
        let name = document.createElement("button")
        name.textContent=count
        count++;
        document.body.appendChild(name)
}

 }add();

    //2nd logic 
function test(){
    let ar  =['a','b','c','d','e','f','g','g','i','k']
    for (let i = 0; i < 10; i++) {
        let v = document.createElement("button")
        v.textContent = ar[i]
        document.body.appendChild(v)

    }
}
test();

let items = `
        <ul>
            <li>A</li>
            <li>B</li>
            <button> Click here </button> 
        </ul>
`
let divElement = document.getElementById('test')
divElement.innerHTML = items;
/* divElement.innerHTML = `
<ul>
    <li>A</li>
    <li>B</li>
    <button> Click here </button> 
</ul>
 */