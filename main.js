// Catch DOM elements

const allBoxes = document.querySelectorAll(".numbers__box");
const btn = document.querySelector(".btn");
const card = document.querySelector(".card");
const card2 = document.querySelector(".card2");
let result = document.getElementById("result");

// Iterate through the number boxes and capture the box number and index (which one receives the click).

allBoxes.forEach((box) => {
    box.addEventListener("click", () => {
        result.innerHTML = box.textContent;
    })
});

btn.addEventListener("click", () => {
    card.classList.toggle("active")
    card2.classList.toggle("active")
});


