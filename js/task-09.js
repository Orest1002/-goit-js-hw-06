

const spanColor = document.querySelector("body");
const btnChangeColor = document.querySelector(".change-color");
const colorRandom = document.querySelector('.color')



 

const changeColor = () => {
  const color = getRandomHexColor();
  colorRandom.textContent = color;
  spanColor.style.backgroundColor = color;
};

btnChangeColor.addEventListener("click", changeColor);


 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


