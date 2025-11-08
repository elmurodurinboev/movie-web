document.addEventListener("DOMContentLoaded", () => {
  const ads = document.querySelectorAll(".promo__adv img"),
    genre = document.querySelector(".promo__genre"),
    promoBg = document.querySelector(".promo__bg"),
    seriesList = document.querySelector(".promo__interactive-list"),
    addForm = document.querySelector("form.add"),
    input = document.querySelector(".adding__input"),
    favirite = document.querySelector("[type='checkbox']");

  const seriesDb = {
    series: [
      "OMAR",
      "The Final Legacy",
      "ERTUGRUL",
      "MAGNIFICENT CENTURY",
      "GREAT SELJUKS: GUARDIANS...",
    ],
  };

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let newValue = input.value;
    const isFavorite = favirite.checked; //true/false

    if (newValue) {
      // Qo'shish
      if (newValue.length >= 18) {
        newValue = `${newValue.slice(0, 18)}...`;
      }

      if (isFavorite) {
        console.log("Sevimli serial qo'shildi");
      }

      seriesDb.series.push(newValue.toUpperCase());
      setList();

      event.target.reset();
    }
  });

  ads.forEach((item) => {
    item.remove();
  });

  genre.textContent = "COMEDY";

  promoBg.style.backgroundImage = "url(../img/2.jpg)";

  function setList() {
    seriesList.innerHTML = "";
    sort();

    seriesDb.series.forEach((item, index) => {
      seriesList.innerHTML += `
    <li class="promo__interactive-item">
        ${index + 1} ${item}
        <div class="delete"></div>
    </li>`;
    });

    document.querySelectorAll(".delete").forEach((trashBtn, index) => {
      trashBtn.addEventListener("click", () => {
        // event.target.parentNode.remove();
        seriesDb.series.splice(index, 1);
        setList();
      });
    }); //[btn1, btn2]
  }

  function sort() {
    seriesDb.series.sort();
  }

  setList();
});
