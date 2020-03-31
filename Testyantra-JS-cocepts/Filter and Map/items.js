var items = [
    {
        id : 1,
        name : 'lipstick',
        price : 850
    },
    {
        id : 2,
        name : 'eyeliner',
        price : 500
    },
    {
        id : 3,
        name : 'Beard Oil',
        price : 900
    },
    {
        id : 4,
        name : 'Raki',
        price : 250
    }
]

console.log(items[0])
console.log(items[1])
console.log(items[2])
console.log(items[3])

for (var item in items) {  
        console.log(item)
        console.log(items[item])
    }

var filItem =   items.filter(val => val.price>500)
console.log("Filtered Items ",filItem)
console.log("Items ",items)

console.log("***********************************")

var mapItem = items.map(val =>
    {
    /* var i = {
            id : val.id,
            name : val.name,
            price : val.price+100

        }
        return i; */
        
        /* var c = new  Object;
        c.id = val.id
        c.name = val.name;
        c.price = val.price+100;

        return c
 */
var clone = Object. assign({}, val);
            clone.price+50
            return clone
} 
)

console.log("Mapped Items ",mapItem)
console.log("Items ",items)
