function createAccount(){

document.getElementById('test').innerHTML="";

//name create
let div1 = document.createElement('div')
let h4 = document.createElement('h4')
h4.textContent = 'Create Account'
let form = document.createElement('form')
let br1 = document.createElement('br')
let label1 = document.createElement('label')
label1.textContent ='Full Name'
let input1 = document.createElement('input')
input1.setAttribute('type','text')
let p1 = document.createElement('p')


//email create
let label2 = document.createElement('label')
label2.textContent ='Email Adress'
let br2 = document.createElement('br')
let input2 = document.createElement('input')
input2.setAttribute('type','text')
let p2 = document.createElement('p')


//password create
let label3 = document.createElement('label')
label3.textContent ='Password'
let br3 = document.createElement('br')
let input3 = document.createElement('input')
input3.setAttribute('type','text')
let p3 = document.createElement('p')


//password create
let label4 = document.createElement('label')
label4.textContent ='Confirm Password'
let br4 = document.createElement('br')
let input4 = document.createElement('input')
input4.setAttribute('type','text')
let p4 = document.createElement('p')


let input5 = document.createElement('input')
input5.type='submit';
input5.value='Signup';
input5.id='create'
input5.addEventListener('click',formValid)
input1.classList = "form-control"
input2.classList = "form-control"
input3.classList = "form-control"
input4.classList = "form-control"

div1.appendChild(h4)
div1.appendChild(form)

form.appendChild(label1)
form.appendChild(br1)
form.appendChild(input1)
form.appendChild(p1)

form.appendChild(label2)
form.appendChild(br2)
form.appendChild(input2)
form.appendChild(p2)

form.appendChild(label3)
form.appendChild(br3)
form.appendChild(input3)
form.appendChild(p3)

form.appendChild(label4)
form.appendChild(br4)
form.appendChild(input4)
form.appendChild(p4)

form.appendChild(input5)

div1.classList = "col-md-4 col-sm-12 offset-4 card card-body mt-5 mb-5 form"
document.body.appendChild(div1)
div1.innerHTML="";



}

function formValid(){

}