console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressbar = document.getElementById('progressbar');

let songs = [
  {songName: "salam-e-ishq", filePath:"Spotify Clone/songs/1.mp3", coverPath:"Spotify Clone/covers/1.jpg"}
  /*{songName: "salam-e-ishq", filePath:"Spotify Clone/songs/1.mp3", coverPath:"Spotify Clone/covers/1.jpg"}
  {songName: "salam-e-ishq", filePath:"Spotify Clone/songs/1.mp3", coverPath:"Spotify Clone/covers/1.jpg"}
  {songName: "salam-e-ishq", filePath:"Spotify Clone/songs/1.mp3", coverPath:"Spotify Clone/covers/1.jpg"}
  {songName: "salam-e-ishq", filePath:"Spotify Clone/songs/1.mp3", coverPath:"Spotify Clone/covers/1.jpg"}
  {songName: "salam-e-ishq", filePath:"Spotify Clone/songs/1.mp3", coverPath:"Spotify Clone/covers/1.jpg"}*/
]

//handle play/paus click
masterPlay.addEventListener('click', ()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
  }
})
//listen to event
progressbar.addEventListener('timeupdate', ()=>{
  console.log('timeupdate');
});
