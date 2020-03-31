const person = {
    naime: 'raj',
    age: 80,
    weight: 60,
    hobbies: ["Acting", 'Singing']
}

const { hobbies } = person;
console.log("Hobbies ", hobbies)


// function displayHobbies(personObj) {

// if u want one property use Destrusturing
// }
// displayHobbies(person);


function displayHobbies({ hobbies }) {
    for (const hobbie of hobbies) {
        console.log(hobbie.toUpperCase())

    }

}
displayHobbies(person);






