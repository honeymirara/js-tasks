/* Необходимо по нажатию на кнопку включать музыку */

let buttonTag = document.querySelector('button');
let audio = document.querySelector('audio');

buttonTag.addEventListener('click', ()=>{
    audio.src = './music/rington_1.mp3'
    audio.play();
})