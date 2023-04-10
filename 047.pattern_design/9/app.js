/* Необходимо по кнопку включать и выключать песню */
let buttonTag = document.querySelector('button');
let audio = document.querySelector('audio');
let flag = false;


buttonTag.addEventListener('click', ()=>{
    audio.src = './music/rington_1.mp3'
    audio.play();
    if(flag == false){
        audio.play();
        flag = true;
        buttonTag.textContent ='PLAY';
    } else{
        audio.pause();
        flag = false;
        buttonTag.textContent = 'STOP';
    }
})