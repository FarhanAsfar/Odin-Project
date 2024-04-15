function createStudent(name) {
    const student = {};
    student.name = name;
    student.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
    };
    return student;
}

const john = createStudent("John");
john.introduceSelf();

const bob = createStudent("Bob");
bob.introduceSelf();


//using constructor

const alice = new createStudent("Alice");
alice.introduceSelf();

const cat = {};
cat.name = "mewo";
cat.breed = "cymric";
cat.color = "white";
console.log(cat);

console.table(cat);

