"use strict";
// har doim js kodni shu tagni ichida yozish kerak sabab serverdan hamma malumotlarni olib bo'lib keyin saytni ochadi
document.addEventListener("DOMContentLoaded", () => {});
const adv = document.querySelector(".promo__adv"),
    genre = document.querySelector(".promo__genre"),
    bg = document.querySelector(".promo__bg"),
    list = document.querySelector(".promo__interactive-list"),
    form = document.querySelector(".add"),
    chechbox = form.querySelector('[type="checkbox"]'),
    inputValue = form.querySelector(".adding__input");

const seriesDB = {
    series: [
        "Omar",
        "The Final Legacy",
        "Ertugrul",
        "Magnificent Century",
        "The Great Seljuks: Guardians...",
    ],
};
adv.remove();
genre.textContent = "Comedy";
bg.style.backgroundImage = 'url("img/1.jpg")';
list.innerHTML = "";
seriesDB.series.forEach((item, idx) => {
    list.innerHTML += `<li class="promo__interactive-item">
    ${idx + 1} ${item}
    <div class="delete"></div>
</li>`;
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    response = {
        text: inputValue.value,
        check: chechbox.chechbox,
    };
    console.log(response);
});
