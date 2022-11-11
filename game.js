let naruto = document.querySelector('.obs');

let jump = () => {
    naruto.classList.add('jump')
}

document.addEventListener('keydown', jump);
