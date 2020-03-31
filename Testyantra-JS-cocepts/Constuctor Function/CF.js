/*//Constructor

function Employee(name,age){
    this===window
    this.ename = name;
    this.age = age;
    this.walk = function(){
        console.log('walk fuction is executed')
    }
    this.getName = function (){
        return this.ename
    }
}

const mark = new Employee("Mark Zuckerberg",35)
console.log('Name is ',mark.ename);
console.log('Age is ',mark.age);

mark.walk();
let name = mark.getName();
console.log("Name is ",name)
 */
console.log("------------------------")



/* function Employee(name,age){
    this.ename = name;
    this.age = age;
    this.walk = function(){
        console.log('walk fuction is executed')
    }
    this.getName = function (){
        return this.ename
    }
}

const mark =  Employee("Mark Zuckerberg",35)
/* console.log('Name is ',mark.ename);//bcz we not using new key word and this keyword is now  pointing
//to window Object
console.log('Age is ',mark.age); */
/* console.log('Name is ',this.ename);
console.log('Age is ',this.age);

this.walk();
let name = this.getName();
console.log("Name is ",name)
 */

function Employee(name, age) {
    this.ename = name;
    this.age = age;
    this.walk = function () {
        console.log(this) // its holds current object
        console.log('walk fuction is executed')
    }
    this.getName = function () {
        //return this.ename

        console.log('This is employee Object ', this) // this equal to employee Object
        function greet() {

            // this is window object is at invoked by window object reference
            console.log('This is Window Object ', this)
        }

        // greet();

        // let that = this; // before Arrow coming

        getData = () => {
            //this is parent context i.e. employee object
            console.log('This is employee object ',this)
        }
    }
}

const mark = new Employee("Mark Zuckerberg", 35)

console.log('Name is ', mark.ename);
console.log('Age is ', mark.age);

mark.walk();
let name = mark.getName();
console.log("Name is ", name)


