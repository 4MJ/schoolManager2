var feeDetail = require('./school');
var studentDetail = require('./student');

// variable nouveau etudiant

var studentID = 1;
var gender = 'female';
var course = ['Develp Web', 'Marketing Digital', 'Develp Androide'];
var name = 'Joy';
var age = 22;
var email = 'mjycho59@gmail.com';
var level = 3;
var amountPaid = 0;


var newStudent = new studentDetail.createStudent(
    studentID, gender, course, name, age, level, email, amountPaid
);

var actualFee = feeDetail.isFeeCompleted(newStudent.amountPaid);
var totalFee = feeDetail.totalFee();
console.log(newStudent.name + " is a student of course " + newStudent.course[2]+ " and has paid fee " + totalFee-actualFee);