var hobbies = ["football", "badmiton", "cooking", "singing", "Travelling"]
hobbies.push("reading")
console.log("hobbies after push", hobbies)
console.log("================================")


var laptops = ["dell", "lenovo"]
laptops.push("hp")
console.log("hobbies after push", laptops)
console.log("================================")

hobbies.pop();
console.log("hobbies after pop", hobbies)
console.log("================================")

laptops.pop();
console.log("hobbies after pop", laptops)
console.log("================================")

hobbies.unshift("sleeping", "bird watching");
console.log("hobbies after unshift", hobbies);
console.log("================================")

laptops.unshift("apple");
console.log("hobbies after unshift", laptops);
console.log("================================")

hobbies.shift();
console.log("hobbies after shift", hobbies);
console.log("================================")

laptops.shift();
console.log("laptops after shift", laptops);

var ishobbiesarray = Array.isArray(hobbies);
console.log("is hobbies array", ishobbiesarray)

console.log("================================")

var islaptopsarray = Array.isArray(laptops);
console.log("is hobbies array", ishobbiesarray)
console.log("================================")

var hassinging = hobbies.includes("singing")
console.log("has singing", hassinging);

console.log("================================")

var haslaptop = hobbies.includes("hp")
console.log("has singing", haslaptop);

console.log("================================")

var str = hobbies.join('--')
console.log("join method ", str)
console.log("================================")

var str = laptops.join('--')
console.log("join method ", str)
console.log("================================")
