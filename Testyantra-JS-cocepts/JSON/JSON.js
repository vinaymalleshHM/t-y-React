let person = {
    name : "yash",
    age : 38,
    color : "pink",
    hobbies : [ "acting",'Singing',"cricket"],
    address : {
        city : "banglore",
        pincode : 560068
    }
}

console.log("js person object ",person)
const  jsonPerson = JSON.stringify(person);

console.log("JSON person object ",jsonPerson);

const jsPerson = JSON.parse(jsonPerson)
console.log("Js person object ",jsPerson);

