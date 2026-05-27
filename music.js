const songs = [
    {
        title: "Song 1",
        file: "songs/song1.mp3"
    },
    {
        title: "Song 2",
        file: "songs/song2.mp3"
    }
];

let currentSong = 0;

const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const title = document.getElementById("song-title");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

function loadSong(index){
    audio.src = songs[index].file;
    title.innerText = songs[index].title;
}

loadSong(currentSong);

playBtn.addEventListener("click", () => {

    if(audio.paused){
        audio.play();
        playBtn.innerText = "⏸";
    }
    else{
        audio.pause();
        playBtn.innerText = "▶";
    }

});

nextBtn.addEventListener("click", () => {

    currentSong++;

    if(currentSong >= songs.length){
        currentSong = 0;
    }

    loadSong(currentSong);
    audio.play();

});

prevBtn.addEventListener("click", () => {

    currentSong--;

    if(currentSong < 0){
        currentSong = songs.length - 1;
    }

    loadSong(currentSong);
    audio.play();

});

audio.addEventListener("timeupdate", () => {

    progress.value = (audio.currentTime / audio.duration) * 100;

});

progress.addEventListener("input", () => {

    audio.currentTime = (progress.value / 100) * audio.duration;

});

volume.addEventListener("input", () => {

    audio.volume = volume.value;

});