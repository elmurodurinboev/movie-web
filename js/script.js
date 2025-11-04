const ads = document.querySelectorAll(".promo__adv img"),
  genre = document.querySelector(".promo__genre"),
  promoBg = document.querySelector(".promo__bg"),
  seriesList = document.querySelector(".promo__interactive-list");

const seriesDb = {
  series: [
    "OMAR",
    "The Final Legacy",
    "ERTUGRUL",
    "MAGNIFICENT CENTURY",
    "GREAT SELJUKS: GUARDIANS...",
  ],
};

ads.forEach((item) => {
  item.remove();
});

genre.textContent = "COMEDY";

promoBg.style.backgroundImage = "url(../img/2.jpg)";

console.dir(seriesList);

seriesList.innerHTML = "";

seriesDb.series.forEach((item, index) => {
  seriesList.innerHTML += `
  	<li class="promo__interactive-item">
        ${index + 1} ${item}
        <div class="delete"></div>
    </li>
  `;
});
