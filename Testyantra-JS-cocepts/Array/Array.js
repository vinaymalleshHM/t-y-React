var friuts = ["Apple", "Mango", "Orange", "ButterFriut"];
console.log(friuts[0]);
console.log(friuts[1]);
console.log(friuts[2]);
console.log(friuts[3]);
console.log("=================================")
for (var i = 0; i < friuts.length; i++) {
    console.log("Fruits " + friuts[i])

}
console.log("==================================")
var person = ["Annu", 40, true, null, undefined];
for (var i = 0; i < person.length; i++) {
    console.log("Person Data " + person[i])

}
console.log("==================================")

var num = 10;
var str = "10";
if (num === str) { //Strict equals
    console.log("Equal's");
} else {
    console.log("Not Equal's");
}