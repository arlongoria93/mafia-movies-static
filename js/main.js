let mainContainer = document.getElementById("/movie/");

//Tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
//CLICK HANDLERS

//Goodfellas
function goodfellasInit() {
  async function getGoodfellas() {
    const data = await fetch(
      "https://omdbapi.com/?apikey=342fdf1c&t=Goodfellas"
    );
    const response = await data.json();
    const title = response.Title;
    const year = response.Year;
    const poster = response.Poster;
    const plot = response.Plot;
    const imdb = response.imdbRating;
    const rTomatoes = response.Ratings[1].Value;
    contentData(title, year, poster, plot, imdb, rTomatoes);
  }
  getGoodfellas();
}
let goodfellas = document.getElementById("goodfellas--id");
goodfellas.onclick = goodfellasInit;

//Once Upon A Time In America
function onceUponATimeInit() {
  async function getOnceUponATime() {
    const data = await fetch(
      "https://omdbapi.com/?apikey=342fdf1c&t=once+upon+a+time+in+america"
    );
    const response = await data.json();
    const title = response.Title;
    const year = response.Year;
    const poster = response.Poster;
    const plot = response.Plot;
    const imdb = response.imdbRating;
    const rTomatoes = response.Ratings[1].Value;
    contentData(title, year, poster, plot, imdb, rTomatoes);
  }
  getOnceUponATime();
}

let ouatia = document.getElementById("ouatia--id");
ouatia.onclick = onceUponATimeInit;

//The Godfather
function theGodfatherInit() {
  async function getGodfather() {
    const data = await fetch(
      "https://www.omdbapi.com/?apikey=342fdf1c&t==the+godfather"
    );
    const response = await data.json();
    const title = response.Title;
    const year = response.Year;
    const poster = response.Poster;
    const plot = response.Plot;
    const imdb = response.imdbRating;
    let rTomatoes;
    try {
      rTomatoes = response.Ratings[1].Value;
      console.log("works");
    } catch (error) {
      console.error(error);
    }
    contentData(title, year, poster, plot, imdb, rTomatoes);
  }
  getGodfather();
}
let godfather = document.getElementById("godfather--id");
godfather.onclick = theGodfatherInit;

//The Godfather II
function theGodfatherTwoInit() {
  async function getGodfatherII() {
    const data = await fetch(
      "https://omdbapi.com/?apikey=342fdf1c&t=The+Godfather%3A+Part+II"
    );
    const response = await data.json();
    const title = response.Title;
    const year = response.Year;
    const poster = response.Poster;
    const plot = response.Plot;
    const imdb = response.imdbRating;
    const rTomatoes = response.Ratings[1].Value;
    contentData(title, year, poster, plot, imdb, rTomatoes);
  }
  getGodfatherII();
}
let godfather2 = document.getElementById("godfather2--id");
godfather2.onclick = theGodfatherTwoInit;

//Pulp Fiction
function pulpFictionInit() {
  async function getPulpFiction() {
    const data = await fetch(
      "https://omdbapi.com/?apikey=342fdf1c&t=pulp+fiction"
    );
    const response = await data.json();
    const title = response.Title;
    const year = response.Year;
    const poster = response.Poster;
    const plot = response.Plot;
    const imdb = response.imdbRating;
    const rTomatoes = response.Ratings[1].Value;
    contentData(title, year, poster, plot, imdb, rTomatoes);
  }
  getPulpFiction();
}
let pulpfiction = document.getElementById("pulpfiction--id");
pulpfiction.onclick = pulpFictionInit;

//The Departed
function theDepartedInit() {
  async function getDeparted() {
    const data = await fetch(
      "https://omdbapi.com/?apikey=342fdf1c&t=the+departed"
    );
    const response = await data.json();
    const title = response.Title;
    const year = response.Year;
    const poster = response.Poster;
    const plot = response.Plot;
    const imdb = response.imdbRating;
    const rTomatoes = response.Ratings[1].Value;
    contentData(title, year, poster, plot, imdb, rTomatoes);
  }
  getDeparted();
}
let thedeparted = document.getElementById("thedeparted--id");
thedeparted.onclick = theDepartedInit;
