const songs = [
    {
        title: "Song 1",
        file: "song1.mp3"
    },
    {
        title: "Song 2",
        file: "song2.mp3"
    },
    {
        title: "Song 3",
        file: "song3.mp3"
    }
];

let currentSong = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("song-title");
const progress = document.getElementById("progress");

function loadSong(index){
    audio.src = songs[index].file;
    title.innerText = songs[index].title;
}

function playPause(){
    if(audio.paused){
        audio.play();
    }
    else{
        audio.pause();
    }
}

function nextSong(){
    currentSong++;

    if(currentSong >= songs.length){
        currentSong = 0;
    }

    loadSong(currentSong);
    audio.play();
}

function prevSong(){
    currentSong--;

    if(currentSong < 0){
        currentSong = songs.length - 1;
    }

    loadSong(currentSong);
    audio.play();
}

audio.addEventListener("timeupdate", () => {

    progress.value =
        (audio.currentTime / audio.duration) * 100 || 0;
});

progress.addEventListener("input", () => {

    audio.currentTime =
        (progress.value / 100) * audio.duration;
});

loadSong(currentSong);
