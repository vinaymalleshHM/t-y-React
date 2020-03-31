//By Id
let pElement = document.getElementById("demo")
console.log("P Element = ",pElement);

let pText =pElement.textContent;
console.log("P Text = ",pText);

let pText1 =pElement.textContent = "HI.. Everyone"
console.log("After ",pText1)

console.log("==========================")

// By querySelector
let testElement = document.querySelector(".test")
console.log("testElement = ",testElement)
console.log("testElement TextContent = ",testElement.textContent)

//By ClassName()
let testElements = document.getElementsByClassName("test")
console.log("TestElements = ",testElements)

for (const element of testElements) {
 console.log(" Element ",element.textContent)
    if (element.textContent === "FaceBook") {
        element.textContent = "Instagram";
        //log(testElements[element]) //No use of the line //see the page not a console
    }

}

let h2Elemet = document.querySelectorAll("h2")
console.log("h2Elemet = ", h2Elemet)

for (const element of h2Elemet) {
    console.log("TextConent = ", element.textContent)
    if (element !== null) {
            //1st Logic
        /*  let hElement = element.textContent.split(" ")
         element.textContent = hElement.join("-")

         element.textContent = element.textContent.split(" ").join("-")
 */
            //2nd Logic
       /*  for (let i = 0; i < element.textContent.length; i++) {
            if (element.textContent == " ") {
                element.textContent = "-";
            }

        } */

            //3rd Logic
         element.textContent = element.textContent.replace(" ","-")
    }
    }


let pTagElement =  document.getElementsByTagName("p") ;
    console.log("pTagElement = ",pTagElement);
    for (const element of pTagElement) {

        console.log("element Text Content = ",element.textContent)
    }

let hNameElement = document.getElementsByName("name");
console.log("hNameElement = ",hNameElement);
    for (const element of hNameElement) {

        console.log("element Text Content = ",element.textContent)
    }


document.write("Good Afternoon")




