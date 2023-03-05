import { getData } from "./service/service.js";
import { Movie } from "./entites/movie.js";
import { createMovie } from "./view/ui.js";

const url = "https://api.tvmaze.com/shows";
const input = $("input");
const cardHolder = $(".cardHolder");
const appendInfo = $(".info");
let id = localStorage.getItem("id");

$(document).ready(function () {
  getData(url).then((response) => {
    response.sort((a, b) => {
      return b.rating.average - a.rating.average;
    });
    let firstMovies = response.slice(0, 50);
    firstMovies.forEach((element) => {
      const movie = new Movie(element.image.medium, element.id, element.name);
      createMovie(movie);
    });
  });


});


$(document).on("keydown",".search-show",()=>{
    $(".search-list").html(" ");
})

$(document).on("click", "a", function () {
  var id = $(this).attr("id");
  localStorage.setItem("id", id);
  location.replace("../info.html");
});
