function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');
const currentColor = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
changeColorBtn.addEventListener('click', changeColorHendler);
function changeColorHendler(event) {  
  currentColor.textContent = getRandomHexColor();
  body.style.backgroundColor = currentColor.textContent;
};