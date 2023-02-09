var neki = [];
$('#addMovie').on('click', function () {
    var numberInput = Number($("#length").val());
    var genre = '';
    neki.push(numberInput);
    $('select option:selected').each(function () {
        genre = $(this).val();
    })
    var name = $('#name').val();
    var movie = new Movie(name, numberInput, genre);
    $('.result').append(`<tr><td>${movie.getData()}</td></tr>`);
    $('.lengthMovies').append(movie.result());
    $('#movieSel').append(`<option>${movie.getName()}</option>`);
    $('#form')[0].reset();
});
