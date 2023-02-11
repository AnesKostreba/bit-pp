var niz = [];
$('#addMovie').on('click', function () {
    var numberInput = Number($("#length").val());
    var genre = '';
    niz.push(numberInput);
    var name = $('#name').val();
    $('#sel option:selected').each(function () {
        genre = $(this).val();
    });
    var movie = new Movie(name, numberInput, genre);

    niz.push(movie.getData());
    $('.result').append(`<tr><td>${movie.getData()}</td></tr>`);
    $('.lengthMovies').append(movie.result());
    $('#movieSel').append(`<option>${movie.getName()}</option>`);
    $('#form')[0].reset();
});

$('#createProgram').on('click',function(){
    console.log(niz);
    var e = $('#startDate').val();

    $('.result2').append(`<li>${e}</li>`);
});

