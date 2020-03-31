function sum(...nums) {
    let total = 0
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];

    }
    return total
}

const Value = sum(10, 20)
console.log(" Value is ", Value)

const Value1 = sum(10, 20, 30)
console.log(" Value1 is ", Value1)

console.log("=============================")

function printAnimals(animal1, animal2, ...animal) {
    console.log(animal1)
    console.log(animal2)
    for (let i = 0; i < animal.length; i++) {
        console.log(animal[i])

    }

}
printAnimals('Lion', 'Tiger', 'Cow', 'Dog')

