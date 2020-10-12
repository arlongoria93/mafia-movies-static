let mainContainer = document.getElementById("/movie/");
const contentData = (title, year, img, plot, imdb, tomatoes, rank) => {
  mainContainer.innerHTML = `<div class="container-test text-center header">
  <div class="row align-items-center header-row mx-auto">
    <div class="col-sm-12">
      <p class="light-green-tag">#${rank}</p>
      <h2 class="light-white-title">
        ${title}
        <span class="light-white year-text"> (${year})</span>
      </h2>
      <img src="${img}" class="img-fluid img-desc-img" alt="" srcset="" />
    </div>
    <div class="col-12 d-flex justify-content-center">
      <p class="light-white-body">
        iMDb ${imdb}|Rotten Tomatoes ${tomatoes}
      </p>
    </div>

    <div class="col-12 d-flex justify-content-center">
      <p class="light-white-body text-left" id="innerText">
        ${plot}
      </p>
    </div>
  </div>
</div>`;
};
