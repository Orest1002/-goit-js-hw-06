

const spanColor = document.querySelector(".widget");
const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", getRandomHexColor);
  

function getRandomHexColor() {
  spanColor.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


