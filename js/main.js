import MOVIE_DATA from "./MOVIE_DATA/MOVIE_DATA.js";
let mainContainer = document.getElementById("main-container");

//MOVIE_DATA decpnstruction
const goodfellasData = MOVIE_DATA[0];
const onceUponATimeData = MOVIE_DATA[1];
const godfatherData = MOVIE_DATA[2];
const godfather2Data = MOVIE_DATA[3];
const pulpFictionData = MOVIE_DATA[4];
const theDepartedData = MOVIE_DATA[5];

//CLICK HANDLERS

//Goodfellas
function goodfellasInit() {
  mainContainer.innerHTML = `<div class="container-test text-center header">
      <div class="row align-items-center header-row mx-auto">
        <div class="col-sm-12">
          <p class="light-green-tag">#1</p>
          <h2 class="light-white-title">
            Goodfellas<span class="light-white year-text"> (1990)</span>
          </h2>
          <img
            src="${goodfellasData.img}"
            class="img-fluid img-desc-img"
            alt=""
            srcset=""
          />
        </div>
        <div class="col-12 d-flex justify-content-center">
          <p class="light-white-body">R | 2h 26min | 8.7/10</p>
          
        </div>
        <div class="col-12 d-flex justify-content-center">
          <p class="light-white-body text-left" id="innerText">
             The story of Henry Hill and his life in the mob, covering his
            relationship with his wife Karen Hill and his mob partners Jimmy
            Conway and Tommy DeVito in the Italian-American crime syndicate.
          </p>
        </div>
      </div>
    </div>`;
}
let goodfellas = document.getElementById("goodfellas--id");
goodfellas.onclick = goodfellasInit;

//Once Upon A Time In America
function onceUponATimeInit() {
  mainContainer.innerHTML = `<div class="container-test text-center header">
      <div class="row align-items-center header-row mx-auto">
        <div class="col-sm-12">
          <p class="light-green-tag">#${onceUponATimeData.rank}</p>
          <h2 class="light-white-title">
            ${onceUponATimeData.title}<span class="light-white year-text"> (${onceUponATimeData.year})</span>
          </h2>
          <img
            src="${onceUponATimeData.img}"
            class="img-fluid img-desc-img"
            alt=""
            srcset=""
          />
        </div>
        <div class="col-12 d-flex justify-content-center">
          <p class="light-white-body">${onceUponATimeData.rrg}</p>
        </div>
        <div class="col-12 d-flex justify-content-center">
          <p class="light-white-body text-left" id="innerText">
             ${onceUponATimeData.description}
          </p>
        </div>
      </div>
    </div>`;
}
let ouatia = document.getElementById("ouatia--id");
ouatia.onclick = onceUponATimeInit;

//The Godfather
function theGodfatherInit() {
  mainContainer.innerHTML = `<div class="container-test text-center header">
      <div class="row align-items-center header-row mx-auto">
        <div class="col-sm-12">
          <p class="light-green-tag">#${godfatherData.rank}</p>
          <h2 class="light-white-title">
            ${godfatherData.title}<span class="light-white year-text"> (${godfatherData.year})</span>
          </h2>
          <img
            src="${godfatherData.img}"
            class="img-fluid img-desc-img"
            alt=""
            srcset=""
          />
        </div>
        <div class="col-12 d-flex justify-content-center">
          <p class="light-white-body">${godfatherData.rrg}</p>
        </div>
        <div class="col-12 d-flex justify-content-center">
          <p class="light-white-body text-left" id="innerText">
             ${godfatherData.description}
          </p>
        </div>
      </div>
    </div>`;
}
let godfather = document.getElementById("godfather--id");
godfather.onclick = theGodfatherInit;

//The Godfather II
function theGodfatherTwoInit() {
  mainContainer.innerHTML = `<div class="container-test text-center header">
      <div class="row align-items-center header-row mx-auto">
        <div class="col-sm-12">
          <p class="light-green-tag">#${godfather2Data.rank}</p>
          <h2 class="light-white-title">
            ${godfather2Data.title}<span class="light-white year-text"> (${godfather2Data.year})</span>
          </h2>
          <img
            src="${godfather2Data.img}"
            class="img-fluid img-desc-img"
            alt=""
            srcset=""
          />
        </div>
        <div class="col-12 d-flex justify-content-center">
          <p class="light-white-body">${godfather2Data.rrg}</p>
        </div>
        <div class="col-12 d-flex justify-content-center">
          <p class="light-white-body text-left" id="innerText">
             ${godfather2Data.description}
          </p>
        </div>
      </div>
    </div>`;
}
let godfather2 = document.getElementById("godfather2--id");
godfather2.onclick = theGodfatherTwoInit;

//Pulp Fiction
function pulpFictionInit() {
  mainContainer.innerHTML = `<div class="container-test text-center header">
      <div class="row align-items-center header-row mx-auto">
        <div class="col-sm-12">
          <p class="light-green-tag">#${pulpFictionData.rank}</p>
          <h2 class="light-white-title">
            ${pulpFictionData.title}<span class="light-white year-text"> (${pulpFictionData.year})</span>
          </h2>
          <img
            src="${pulpFictionData.img}"
            class="img-fluid img-desc-img"
            alt=""
            srcset=""
          />
        </div>
        <div class="col-12 d-flex justify-content-center">
          <p class="light-white-body">${pulpFictionData.rrg}</p>
        </div>
        <div class="col-12 d-flex justify-content-center">
          <p class="light-white-body text-left" id="innerText">
             ${pulpFictionData.description}
          </p>
        </div>
      </div>
    </div>`;
}
let pulpfiction = document.getElementById("pulpfiction--id");
pulpfiction.onclick = pulpFictionInit;

//The Departed
function theDepartedInit() {
  mainContainer.innerHTML = `<div class="container-test text-center header">
      <div class="row align-items-center header-row mx-auto">
        <div class="col-sm-12">
          <p class="light-green-tag">#${theDepartedData.rank}</p>
          <h2 class="light-white-title">
            ${theDepartedData.title}<span class="light-white year-text"> (${theDepartedData.year})</span>
          </h2>
          <img
            src="${theDepartedData.img}"
            class="img-fluid img-desc-img"
            alt=""
            srcset=""
          />
        </div>
        <div class="col-12 d-flex justify-content-center">
          <p class="light-white-body">${theDepartedData.rrg}</p>
        </div>
        <div class="col-12 d-flex justify-content-center">
          <p class="light-white-body text-left" id="innerText">
             ${theDepartedData.description}
          </p>
        </div>
      </div>
    </div>`;
}
let thedeparted = document.getElementById("thedeparted--id");
thedeparted.onclick = theDepartedInit;
