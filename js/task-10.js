function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxes = document.querySelector('#boxes');
const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesArray = [];

createBtn.addEventListener('click', createBtnHandler);
function createBtnHandler() {
  createBoxes(input.value)
  boxes.append(...boxesArray)
};
function createBoxes(quantity) {
  for (let i = 0; i <= quantity; i++){
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesArray.push(box)
  }
};

destroyBtn.addEventListener('click', destroyBtnHandler);
function destroyBtnHandler() {
  boxes.innerHTML = '';
  boxesArray.splice(0, boxesArray.length);
};