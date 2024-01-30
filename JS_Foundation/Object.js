//common to use 'const' to declare objects if the variable is truly immutable.
const student = {
    name: "Farhan Asfar",
    id: "2020-1-60-154",
    department: "CSE"
}

console.log(student);

student.semester = "Fall2023"; //adding new key to the object 'student'

console.log(student);


const faculty = {
    name: "RDA",
    department: "CSE",
    salary: "120k"
}

console.log(faculty);


const person = {
    firstName : 'Farhan',
    lastName : 'Asfar',
    id : 154,
    fullName: function(){
        return this.firstName+ " "+ this.lastName; //'this' refers to the 'person' object
    }
};
console.log(person)
console.log(person.fullName());