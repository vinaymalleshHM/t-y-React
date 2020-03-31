var hobbies = ["Football","Badmitan","Cooking","Singing","Travelling"]
hobbies.push("Reading","Coding") // its returns the length of modify array
console.log("Hobbies After push ",hobbies)

console.log("*******************************")

hobbies.pop();
console.log("Hobbies After pop ",hobbies)

console.log("*******************************")

hobbies.unshift("Sleeping","Bird Watching")
console.log("Hobbies After unshift ",hobbies)

console.log("*******************************")

hobbies.shift();
console.log("Hobbies After shift ",hobbies)

console.log("*******************************")

var isHobbiesArray = Array.isArray(hobbies)
console.log("is Hobbies Array ",isHobbiesArray)

console.log("*******************************")

var hasCooking = hobbies.includes("Cooking")
console.log("Has Cooking ",hasCooking)

console.log("*********************************")

var hasCooking = hobbies.includes("Cooking",5)
console.log("Has Cooking ",hasCooking)

console.log("*********************************")

var indexSinging = hobbies.indexOf('Singing')
console.log("Index of Singing ",indexSinging)

console.log("*********************************")

var indexSinging = hobbies.indexOf('Singing',6)
console.log("Index of Singing ",indexSinging)

console.log("*********************************")

var str = hobbies.join('~~~')
console.log("Join Method ",str)

console.log("*********************************")

var brands = ["Signature",'Bisleri','Kingsfisher',"Kinley"]
brands.splice(1,1,"Water");

console.log("Brands After Splice ",brands)

console.log("*********************************")

var movies = ["Bangarada Manushya",'Bhoo Kailas','Mother Indian',"Balan","India"]

movies.slice(1,3)

console.log("Movies ",movies)

console.log("*********************************")

var sliceMovies = movies.slice(1,3)

console.log("After Slice ",sliceMovies);

console.log("*********************************")

var newMovies = movies.slice();

newMovies.splice(3,0,"KGF");

console.log("new movie",newMovies)

console.log("Movies ",movies)


console.log("*********************************")

    
 