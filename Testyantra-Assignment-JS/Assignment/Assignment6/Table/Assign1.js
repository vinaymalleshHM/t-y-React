// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

let div = document.getElementById('div')
let tabEle = document.createElement("table")
let thead = document.createElement("thead")
let clear = document.createElement("button")

let tr = document.createElement("tr")
let th1 = document.createElement("th")
let th2 = document.createElement("th")
let th3 = document.createElement("th")
let th4 = document.createElement("th")

th1.textContent = "Name"
th2.textContent = "Age"
th3.textContent = "Email"
th4.textContent = "Mobile"
clear.textContent = "Clear All"


tabEle.classList = 'table table-bordered table-hover table-striped '
thead.classList = 'thead-dark'
clear.classList = 'btn btn-danger col-md-4'
div.classList = 'container-fluid'

div.appendChild(tabEle)
tabEle.appendChild(thead)
thead.appendChild(tr)
tr.appendChild(th1)
tr.appendChild(th2)
tr.appendChild(th3)
tr.appendChild(th4)

table();

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    let name = document.contactForm.name.value;
    let age = document.contactForm.age.value;
    let email = document.contactForm.email.value;
    let mobile = document.contactForm.mobile.value;

    // Defining error letiables with a default value
    let nameErr = emailErr = mobileErr = ageErr = true;

    // Validate name
    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        let regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    // Validate age number
    if (age == "") {
        printError("ageErr", "Please enter your age");
    } else {
        let regex = /^[1-9]/;
        if (regex.test(age) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else {
            printError("mobileErr", "");
            ageErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        let regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate mobile number
    if (mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        let regex = /^[1-9]\d{9}$/;
        if (regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    // Prevent the form from being submitted if there are any errors
    if ((nameErr || emailErr || mobileErr || ageErr) == true) {
        return false;
    }
    let arr = [name, age, email, mobile]
    store(arr);

}

function table() {

    for (let i = 0; i < localStorage.length; i++) {
        const localStr = localStorage.getItem(localStorage.key(i)).split(",")
        if (localStr != null && localStorage.key(i).startsWith('value')) {

            let tBody = document.createElement('tbody')
            let tr = document.createElement('tr')
            let td1 = document.createElement('td')
            let td2 = document.createElement('td')
            let td3 = document.createElement('td')
            let td4 = document.createElement('td')

            td1.textContent = localStr[0]
            td2.textContent = localStr[1]
            td3.textContent = localStr[2]
            td4.textContent = localStr[3]

            tabEle.classList = 'table'

            tabEle.appendChild(tBody)
            tBody.appendChild(tr)
            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            tr.appendChild(td4)
            document.body.appendChild(tabEle)
            document.body.appendChild(clear)

        }
    }
}

clear.addEventListener('click', function() {
    localStorage.clear();
    location.reload();
})

function store(value) {
    let a = localStorage.length + 1;
    localStorage.setItem(`value${a}`, value)
}