const text = document.querySelector('.loader_text'); 
const stringText = text.textContent; 
const splitText = stringText.split(''); 
text.textContent = ''; 
for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += '<span>' + splitText[i] + '</span>'; 
}
let letter = 0; 
let timer = setInterval(onTick, 100);

function onTick() {
    const span = text.querySelectorAll('span')[letter];
    span.classList.add('enterX');
    letter++
    if (letter === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer); 
    timer = null;
}
