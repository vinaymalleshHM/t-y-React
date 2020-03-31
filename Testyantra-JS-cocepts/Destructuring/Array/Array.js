const numbers = [100, 200, 300, 400]

let [num1, num2, num3, num4] = numbers;

console.log("Num1 ", num1)
console.log("Num2 ", num2)
console.log("Num3 ", num3)
console.log("Num4 ", num4)

const items = [
    {
        name: 'Watch',
        brand: 'titan',
        price: 2000
    },
    {
        name: 'lipstick',
        brand: 'lakme',
        price: 300
    },
    {
        name: 'mobile',
        brand: 'redmi',
        price: 8000
    }
]

const [item1, item2] = items;

console.log("Item1 ", item1)
console.log("Item1 ", item2)

console.log("Item1 "+ item1)//if use + it will show Object Object 
console.log("Item1 "+ item2)//if use + it will show Object Object
