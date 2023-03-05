import { getData } from "../service/service.js";
const id = localStorage.getItem('id');
const urlCrew = `https://api.tvmaze.com/shows/${id}/crew`;
const urlAkas = `https://api.tvmaze.com/shows/${id}/akas`;

export function createMovie(movie) {
  let cardHolder = $(".cardHolder");

  var e = $(`
                    <div class="col-md-4 justify-content-center d-flex col-sm-12 mt-5">
                    <div class="card border-0 bg-dark" style="width:20rem;">
                    <img class="card-img-top" style="-webkit-box-shadow: 28px 23px 50px 22px rgba(0,0,0,0.75);
                    -moz-box-shadow: 28px 23px 50px 22px rgba(0,0,0,0.75);
                    box-shadow: 28px 23px 50px 22px rgba(0,0,0,0.75);" src="${movie.image}">
                    <a href="info.html" id=${movie.id} class="btn " style="color:white; background-color:rgb(70 75 76); border:0px;">${movie.name}</a>
                    </div>
                    </div>
                    `);

  cardHolder.append(e);
}

export function createInfoMovie(response) {
  let img = $(".showImage");
  img.attr("src", response.image.original);
  $(".name").append(`<h2>${response.name}</h2>`);
  $(".showDetails").append(`<p>${response.details}</p>`);
  let cast = $("<ul class='lista'>");
  $(".cast").append(cast);
  console.log(response);
  let castA = response.cast.slice(0,10);


  castA.forEach((element) => {
    let listCast = $("<li>");

    listCast.text(element.character.name);
    cast.append(listCast);
  });
  

  let seasoneNumber = response.seasons.length;

  $(".seasons").append(`<h4>Seasons: (${seasoneNumber})</h4>`);

  let lista = $('<ul class="lista">');
  $(".seasons").append(lista);

  response.seasons.forEach((element) => {
    var listItem = $("<li>");

    listItem.text(element.premiereDate + " " + element.endDate);
    lista.append(listItem);
  });

  let crew = $('<ul class="crewUL"></ul>');
  $('.crew').append(crew);
  
  getData(urlCrew).then(response =>{
    response.forEach((crw)=>{
        console.log(crw.type);
        $('.crew').append(`<li style="list-style:none">${crw.person.name}, ${crw.type}</li>`);
    })
  })


  let akas = $('<ul class="akasUL"></ul>');
  $('.akas').append(akas);
  
  getData(urlAkas).then(response =>{
    response.forEach((aks)=>{
        const aksIt = $('<li style="list-style:none">');
        const countryName = aks.country ? aks.country.name : '';
        aksIt.text(`${countryName}, ${aks.name}`);
        akas.append(aksIt);
    })
  })
}
