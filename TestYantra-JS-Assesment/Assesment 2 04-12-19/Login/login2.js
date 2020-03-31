const loginAccount = document.getElementById("loginAccount")
loginAccount.addEventListener('click', addLogin)


const div1L = document.createElement("div")
const div2L = document.createElement("div")
const div3L = document.createElement("div")

const formL = document.createElement("form")
const h3L = document.createElement("h3")


const input1L = document.createElement("input")
const input2L = document.createElement("input")


const label1L = document.createElement("label")
const label2L = document.createElement("label")

const buttonL = document.createElement("button")

const pTag1L = document.createElement("p")
const pTag2L = document.createElement("p")


div1L.classList = "col-md-4 col-sm-12 offset-4 card card-body mt-5 mb-5"
div2L.classList = "form-group"
div3L.classList = "offset-5 mt-3"
buttonL.addEventListener('click', validateLoginForm)


formL.name = "form"
buttonL.id = "login"
buttonL.type = "button"

input1L.classList = "form-control"
input2L.classList = "form-control"


buttonL.classList = "btn btn-outline-dark"

h3L.textContent = "Login Form"
label1L.textContent = "Name:"
label2L.textContent = "Password:"
buttonL.textContent = "LoginAccount"


div1L.appendChild(formL)
formL.appendChild(div2L)
div2L.appendChild(h3L)
div2L.appendChild(label1L)
div2L.appendChild(input1L)
div2L.appendChild(pTag1L)
div2L.appendChild(label2L)
div2L.appendChild(input2L)
div2L.appendChild(pTag2L)
div2L.appendChild(div3L)
div3L.appendChild(buttonL)

function addLogin() {
    id1.innerHTML = ""
    id1.appendChild(div1L)
}


function validateLoginForm() {
    if (input1L.value.trim() === "" && input2L.value.trim() === "") {
        input1L.style.border = "1px solid red"
        pTag1L.style.color = "red"
        pTag1L.style.fontSize = "10px"
        pTag1L.innerHTML = "Username is required"

        input2L.style.border = "1px solid red"
        pTag2L.style.color = "red"
        pTag2L.style.fontSize = "10px"
        pTag2L.innerHTML = "Password. is required"

        return false

    } if (input1L.value.trim().length < 3) {
        input1L.style.border = "1px solid red"
        pTag1L.style.color = "red"
        pTag1L.style.fontSize = "10px"
        pTag1L.style.visibility = "visible"
        pTag1L.innerHTML = "Name Character should more than 3"
        return false


    } if (input2L.value.trim().length < 3) {
        input2L.style.border = "1px solid red"
        pTag2L.style.color = "red"
        pTag2L.style.fontSize = "10px"
        pTag2L.style.visibility = "visible"
        pTag2L.innerHTML = "Password Character should more than 3"
        return false


    }

    authentication()
    formL.reset()

}
function authentication() {
    for (let i = 0; i < localStorage.length; i++) {
        let test = localStorage.getItem(localStorage.key(i)).split(",")
        console.log(test[0]);
        console.log(input1L.value);
        
  
        if(test !== null){
             if(test[0] !== input1L.value || input1L.value === 0){
                 console.log("inside");
                 
                input1L.style.border = "1px solid red"
                pTag1L.style.color = "red"
                pTag1L.style.fontSize = "10px"
                pTag1L.innerHTML = "Username is invalid"
        
               
            }else{
                console.log("else block");
                
                input1L.style.border = "1px solid black"
                pTag1L.style.color = "black"
                pTag1L.style.fontSize = "10px"
                pTag1L.innerHTML = ""

        
               

            }
            if(test[2] !== input2L.value){
                input2L.style.border = "1px solid red"
                pTag2L.style.color = "red"
                pTag2L.style.fontSize = "10px"
                pTag2L.innerHTML = "Password. is invalid"
            }else{
                input2L.style.border = "1px solid black"
                pTag2L.style.color = "black"
                pTag2L.style.fontSize = "10px"
        

            }
            if(test[0] === input1L.value && test[2] === input2L.value){

                console.log("success");
                addTable()


            }else{
                console.log("Failed");
               
 
                
            }
           
        }
    }
}























