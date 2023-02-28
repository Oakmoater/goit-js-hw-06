const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
text.style.fontSize = fontSizeControl.value + 'px';
console.log(fontSizeControl.value);
fontSizeControl.addEventListener('input', chengeFontSize);
function chengeFontSize(event){
    text.style.fontSize = event.target.value + 'px'
};
