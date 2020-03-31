var fruits = ["apple", "orange", "grapes", "mango", "kiwi"]
for (var index in fruits) {
    console.log("Index is", index);
    console.log("Fruit", fruits[index]);

}
console.log("================================")

var laptop = ["hp", "dell", "lenovo"]
for (var index in laptop) {
    console.log("Index is", index);
    console.log("laptop", laptop[index]);

}
console.log("================================")

var bottles = ["bisleri", "himalya", "kingfisher"]
for (var index in bottles) {
    console.log("using for of", index);
    console.log("bottles", bottles[index]);
}

console.log("================================")

var hero = ["Sudeep", "Allu Arjun", "Mahesh"]

for (var index in hero) {
    console.log("Index is", index);
    console.log("hero", hero[index]);
}
console.log("================================")

var person = ["Dimple", "Naga", "raju"]
for (var index in person) {
    console.log("Index is", index);
    console.log("Person", person[index]);
}

console.log("================================")

var employee = ["Dimple", "Naga", "raju"]
for (var index in employee) {
    console.log("Index is", index);
    console.log("employee", employee[index]);
}

console.log("================================")

var person1 = {
    name: 'Dinga',
    college: 'MSRIT',
    bf: false
}

for (var key in person1) {
    console.log("key is", key);
    console.log("value is", person1[key]);
}
console.log("================================")

var employee1 = {
    name: 'Ramesh',
    college: 'BMS',
    bf: false
}

for (var key in employee1) {
    console.log("key is", key);
    console.log("value is", employee1[key]);
}
console.log("================================")
