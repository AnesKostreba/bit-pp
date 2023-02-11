var passStudent = 0;
var failedStudent = 0;
var allStudents = [];
var totalStudent = allStudents.length;


function setValue() {    
    var value = '';
    $('select option:selected').each(function () {
        value = $(this).text();
    })
    var name = $('#name').val();
    var sp = name.split(" ");
    var subject = new Subject(value);
    var grade = Number($('#grade').val());
    var student = new Student(sp[0], sp[1]);
    var e = new Exam(subject, student, grade);


    // var sub = $('#sel').val();
    // var grd = $('#grade').val();
    // var nm = $('#name').val();

    // var students = new Object();
    // students.subjct = sub;
    // students.grades = grd;
    // students.names = nm;
    // allStudents.push(students);

    //validate
    if(grade > 10 || grade < 5){
        alert("Ocena mora biti od broja 5 do 10");
        return;
    }
    if (!name || !grade || value == '-') {
        alert('Morete popuniti sva polja!!');
    } else if (e.hasPassed(grade)) {
        passStudent++;
        totalStudent++;
        $('#passed').append(`<li>${e.getExamInfo()}</li>`);
    } else {
        failedStudent++;
        totalStudent++;
        $('#failed').append(`<li>${e.getExamInfo()}</li>`);
        $('.failed-student').append(`${failedStudent}`);
    }

    // var procenat = (failedStudent * 100)/totalStudent;
    // $('.procent').after(`<p>%${procenat}</p>`);

    //exam
    var std = new Statistics();
    std.procenat();
    std.getTotalPassed();
    std.getTotalFailed();
    std.getTotalStudents();
    $('#name').val('');
    $('#grade').val('');
    $('#sel').val('-');
}