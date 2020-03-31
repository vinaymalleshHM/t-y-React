const numbers = [100, 200, 300]
console.log("Numbers ", numbers);

const copyofNumbers = [...numbers];
console.log("Copy of Numbers ", copyofNumbers);

numbers.push(500);

console.log('After push ', numbers)
console.log('After push Copy of Numbers ', numbers)

//

const animals = ['Lion', 'Tiger', 'Cow', 'Dog'];
const moreAnimals = ['Giraffe', 'Camel', 'Puma', 'Humans']

const copyofAnimal = [...animals, ...moreAnimals];

console.log('copyofAnimal ', copyofAnimal)


// Spread Operator with Object

const person = {
    name: 'Sundra',
    age: 23,
    height: 5.7,
    wight: 60
}

const copyofPerson = { ...person }

person.name = 'Sundri'

console.log("Person Object ", person)
console.log(" Copy of Person Object ", copyofPerson)

console.log("===========================")

const teacher = {
    name: 'Reena',
    age: 30,
    color: 'Pink',
    subject: ['Social', 'English']
}

const address = {
    city: 'Banglore',
    pincode: '560068',
    landrak: 'BTM'
}

const teacherWithAddress = { ...teacher, ...address };
console.log("Teacher With  Adress ", teacherWithAddress)

const teacherWithPhoneno = {
    ...teacher,
    phoneno : 64685623539,
    married : false,
    getNmae : function(){
        return this.name
    }
}


console.log("Teacher With  Phoneno ", teacherWithPhoneno)





