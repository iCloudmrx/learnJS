"use strict";
// har doim js kodni shu tagni ichida yozish kerak sabab serverdan hamma malumotlarni olib bo'lib keyin saytni ochadi
document.addEventListener("DOMContentLoaded", () => {
    const adv = document.querySelector(".promo__adv"),
        genre = document.querySelector(".promo__genre"),
        bg = document.querySelector(".promo__bg"),
        list = document.querySelector(".promo__interactive-list"),
        form = document.querySelector(".add"),
        checkbox = form.querySelector(".checkbox"),
        inputVal = form.querySelector(".adding__input");

    const seriesDB = {
        series: [
            "Omar",
            "The Final Legacy",
            "Ertugrul",
            "Magnificent Century",
            "The Great Seljuks: Guardians...",
        ],
    };
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let text = inputVal.value,
            correct = checkbox.checked;
        if (seriesDB.series.indexOf(text) === -1 && text) {
            if (text.length > 18) {
                text = `${text.substring(0, 18)}...`;
            }
            if (correct) {
                console.log("ZO'R");
            }
            console.log(text.length);
            seriesDB.series.push(text);
        }
        createSeries(seriesDB.series, list);
        event.target.reset();
    });
    const sortArr = (arr) => {
        arr.sort();
    };
    const deleteadv = (arr) => {
        arr.remove();
    };
    const makeChange = () => {
        genre.textContent = "Comedy";
        bg.style.backgroundImage = 'url("img/1.jpg")';
    };
    function createSeries(series, parent) {
        parent.innerHTML = "";
        sortArr(series);
        series.forEach((item, idx) => {
            parent.innerHTML += `<li class="promo__interactive-item">
        ${idx + 1} ${item}
        <div class="delete"></div>
    </li>`;
        });

        document.querySelectorAll(".delete").forEach((item, idx) => {
            item.addEventListener("click", () => {
                item.parentElement.remove();
                seriesDB.series.slice(idx, 1);

                //createSeries(series, parent);
            });
        });
    }
    deleteadv(adv);
    makeChange();
    createSeries(seriesDB.series, list);
});
