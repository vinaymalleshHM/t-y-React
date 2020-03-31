const jhon = {
    name :'jhon',
    age : 25,
    presentation : function (...arr){
        if (arr[0]==='formal') 
            console.log(`Good ${arr[1]}, this is ${this.name}`)
        else 
            console.log(`Hey ${arr[1]} this ${this.name}`)
        
    }
}
/* const jhon = {
    name :'jhon',
    age : 25,
    presentation : function (style,timeofDay){
        if (style==='formal') 
            console.log(`Good ${timeofDay}, this is ${this.name}`)
        else 
            console.log(`Hey ${timeofDay} this ${this.name}`)
        
    }
}*/
jhon.presentation('formal','Morning') 
console.log("==============")

const babitha = {
    name :'babitha',
    age : 23
}
jhon.presentation.call(babitha,'friendly','Evening')
console.log("==============")

const emily = {
    name :'emily',
    age : 22
}
jhon.presentation.apply(emily,['formal','Night'])
console.log("==============")

const vijay = {
    name :'vijay',
    age : 50
}

//bind doesn't execute the function insted 
//it will create a copy of the function and it will return it
//we can reuse the function whenever required with diff parameters

//const bindFunction = jhon.presentation.bind(vijay,'friendly','AfterNoon')
const bindFunction = jhon.presentation.bind(vijay,'friendly')
bindFunction('Morning');
bindFunction('Evening');
bindFunction('Night');
console.log("==============")

