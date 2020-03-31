class Person {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;

    }
    getFullName() {
        return this.fname + " " + this.lname
    }
}

const person = new Person('Nazriya', 'Fahad', 26)

console.log("First name is ", person.fname)
console.log("Last name is ", person.lname)
console.log("Age  is ", person.age)
const fullName = person.getFullName();
console.log('Full Name ', fullName)


class Teacher extends Person {
    constructor(fname, lname, age, subjects) {
        super(fname, lname, age);
        this.subjects = subjects;
    }
    getSubjects() {
        return this.subjects
    }
    static teacherStyle(){
        return 'Boring teaching '
    }
}

const teacher = new Teacher("Rajeshwari", 'Fahadh', 26, ['Science', 'English'])
const teacherFullName = teacher.getFullName();
console.log('Full name is ', teacherFullName)
const subjects = teacher.getSubjects();
console.log('Subjects ', subjects)
const style = Teacher.teacherStyle();
console.log('Teaching style ',style)