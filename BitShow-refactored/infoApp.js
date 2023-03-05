import {InfoMovie } from "./entites/infoMovie.js";
import { getData } from "./service/service.js";
import { createInfoMovie } from "./view/ui.js";

const id = localStorage.getItem('id');
const urlInfo = `https://api.tvmaze.com/shows/${id}?embed[]=episodes&embed[]=cast&embed[]=seasons`;
const urlCrew = `https://api.tvmaze.com/shows/${id}/crew`;

$(document).ready(function () {
    getData(urlInfo).then(element => {
        console.log(element);
        const infoMovie = new InfoMovie(element.name,element.image,element._embedded.seasons,element._embedded.cast,element,element,element.summary);
        createInfoMovie(infoMovie);
    })
});