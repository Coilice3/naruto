let na = document.querySelector('.obj');
let sak = document.querySelector('.block')
let btn = document.querySelector('button')


let jump = () => {
    na.classList.add('jump')
    setTimeout(() => {
        na.classList.remove('jump')
    }, 500);
}
//default

let score = 0;
setInterval(() => {
    score++;
    document.getElementById("scr").innerHTML = score;
}, 500);

let rev = setInterval(() => {
    let sakPosition = sak.offsetLeft;
    let naPosition = +window.getComputedStyle(na).bottom.replace('px', ' ');

    if (sakPosition <= 100 && naPosition < 120 && sakPosition > 0) {
        sak.style.animation = 'none';
        na.style.animation = 'none';

        setTimeout(() => {
            alert("You Lost !! Your Score is: " + score);
            localStorage.setItem("score", score);
            savescore = localStorage.getItem("score");
            return;
        }, 10);

        btn.style.display = 'block'
        na.src = "/img/game/over.gif";
        na.style.width = '200px'

    }
}, 10);


document.addEventListener('keydown', jump);
