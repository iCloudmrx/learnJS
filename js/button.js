"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".btn");
    const btns = document.querySelectorAll("button");
    wrapper.addEventListener("click", (event) => {
        if (event.target && event.target.matches("BUTTON.red")) {
            console.log("click btn");
        }
    });

    const btn = document.querySelector(".active");
    btn.className = btn.className === "active" ? "inactive" : "active";
    console.log(btn.className);
});
