const inputArea = document.querySelector('#name-input');
const inputGreeting = document.querySelector('#name-output');

inputArea.addEventListener("input", (event) => {
  inputGreeting.textContent = event.currentTarget.value === "" ?
    "Anonymous" : event.currentTarget.value
});