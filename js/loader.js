const progress = "..........";

let index = 0;
const loader = document.getElementById("loader");
const output = document.getElementById("output");
const enterButton = document.getElementById("enterButton");

const timerId = setInterval(() => {
    output.innerHTML += progress[index];
    index++;
    if (index === progress.length) {
        clearInterval(timerId);
        setTimeout(function() {
            enterButton.style.display = 'inline';
            loader.style.display = 'none';

        }, 2000);
    }
}, 500);
