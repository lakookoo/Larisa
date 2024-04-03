class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year
    }
    fullName(){
        return `fullname is ${this.firstName} ${this.lastName}`;
    }
    static enrollStudents(...students){
        // utility function class method
    }
}

let firstStudent = new Student("Masha", "Pupkina", 2021)