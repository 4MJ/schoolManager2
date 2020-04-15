exports.createStudent = class Student {
    constructor(studentID, gender, course, name, age, level, email, amountPaid){
        this.studentID=studentID;
        this.age=age;
        this.course=course;
        this.email=email;
        this.gender=gender;
        this.name=name;
        this.level=level;
        this.amountPaid=amountPaid;
    }
}