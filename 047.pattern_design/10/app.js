/*  Добавить переключение песен */
let buttonLeft = document.querySelector('.left');
let buttonPlay = document.querySelector('.play');
let buttonRight = document.querySelector('.right');
let audio = document.querySelector('audio');
let name_song = document.querySelector('.name-song');
let image = document.querySelector('.image');
let author = document.querySelector('.author');

let flag = false;
let currentIndexSong = 0;


let playList = [{
    image: "./assets/kitten.jpg",
    author: "ding-ding",
    name: "rington_1",
    path: "./music/rington_1.mp3"

},
{
    image: "./assets/nya.jpg",
    author: "lala",
    name: "rington_2",
    path: "./music/rington_2.mp3"
},
{
    image: "./assets/smile.jpg",
    author: "pom-pom",
    name: "rington_3",
    path: "./music/rington_3.mp3"
}
];


buttonPlay.addEventListener('click', () => {
    audio.src = playList[currentIndexSong].path;
    if (flag == false) {
        audio.play();
        flag = true;
        buttonPlay.textContent = 'STOP';
        name.innerHTML = playList[currentIndexSong].name;
        author.innerHTML = playList[currentIndexSong].author;
        image.style = `background-image: url(${playList[currentIndexSong].image});
        width: 300px;
        height: 300px;
        background-size: contain;`
    } else {
        audio.pause();
        flag = false;
        buttonPlay.textContent = 'PLAY';
        name.innerHTML = playList[currentIndexSong].name;
        author.innerHTML = playList[currentIndexSong].author;
        image.style = `background-image: url(${playList[currentIndexSong].image});
        width: 300px;
        height: 300px;
        background-size: contain;`
    }
})

buttonLeft.addEventListener('click', () => {
    if (currentIndexSong == 0) return;
    currentIndexSong--
    audio.src = playList[currentIndexSong].path;
    audio.play();
    flag = true;
    buttonPlay.textContent = 'STOP';
    name.innerHTML = playList[currentIndexSong].name;
    author.innerHTML = playList[currentIndexSong].author;
    image.style = `background-image: url(${playList[currentIndexSong].image});
        width: 300px;
        height: 300px;
        background-size: contain;`
});

buttonRight.addEventListener('click', () => {
    if (currentIndexSong >= playList.length - 1) return;
    currentIndexSong++
    audio.src = playList[currentIndexSong].path;
    audio.play();
    flag = true;
    buttonPlay.textContent = 'STOP';
    name.innerHTML = playList[currentIndexSong].name;
    author.innerHTML = playList[currentIndexSong].author;
    image.style = `background-image: url(${playList[currentIndexSong].image});
        width: 300px;
        height: 300px;
        background-size: contain;`

});



