class Exam {
  constructor(subject, student, grade) {
    this.subject = subject;
    this.student = student;
    this.grade = grade;
  }

  getExamInfo() {
    return this.subject.getSubjectName() + " " + this.student.getStudentData() + " " + this.grade;
  }

  hasPassed(grd) {
    if (grd > 5) {
      return true;
    } else {
      return false;
    }
  }

}
class Statistics {
  
  getTotalPassed() {
    var pass = $('.passed-student').text(passStudent);
    return pass;
  }

  getTotalFailed() {
    var fail = $('.failed-student').text(failedStudent);
    return fail;
  }

  getTotalStudents() {
    var total = $('#counter').text(totalStudent);
    return total;
  }
  procenat(){
    var procenat = (failedStudent * 100)/totalStudent;
    var p = $('.procent').text('%'+Math.ceil(procenat));
    return p;
  }
}