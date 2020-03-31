const table = document.createElement("table");
const tBody = document.createElement("tbody");
const thead = document.createElement("thead");

const tr1 = document.createElement("tr");

const th1 = document.createElement("th");
const th2 = document.createElement("th");
const th3 = document.createElement("th");

th1.textContent = "Name"
th2.textContent = "Mob no."
th3.textContent = "Password"

const button1T = document.createElement("button")
button1T.type = "button"
button1T.textContent = "ClearAll"

button1T.classList = "btn btn-outline-dark col-md-2 offset-md-5 mb-5 mt-5 "

table.appendChild(thead)
thead.appendChild(tr1)


tr1.appendChild(th1)
tr1.appendChild(th2)
tr1.appendChild(th3)
table.classList = 'table container border offset-3 mt-3  col-md-6'


function addRow() {
    for (let i = 0; i < localStorage.length; i++) {

        let test = localStorage.getItem(localStorage.key(i)).split(",")


        const tr2 = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const del = document.createElement("button")



        td1.textContent = test[0]
        td2.textContent = test[1]
        td3.textContent = test[2]
        del.textContent = "Delete"

        table.appendChild(tBody)
        tBody.appendChild(tr2)
        tr2.appendChild(td1)
        tr2.appendChild(td2)
        tr2.appendChild(td3)
        tr2.appendChild(del)

        del.addEventListener("click",function () {
            tr2.innerHTML=""
            localStorage.removeItem(localStorage.key(i))
        })

    }

}

addRow()
function addTable() {
    id1.innerHTML = ""

    id1.appendChild(table)
    id1.appendChild(button1T)
}


button1T.addEventListener("click", function () {

    localStorage.clear()
    

})
  