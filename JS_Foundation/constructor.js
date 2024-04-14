function createStudent(name){
    const student = {};
    student.name = name;
    student.introduceSelf(){
        console.log(`Hi! I'm ${this.name}.`);
    };
    return student;
}