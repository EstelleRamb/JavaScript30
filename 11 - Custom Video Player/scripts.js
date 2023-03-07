//Get our elements

const player = document.querySelector(".player");
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player__slider');


// Build functions

function togglePlay(){
  const method = video.paused ? 'play' : 'pause';
  video[method]();
  // if (video.paused) {
  //   video.play();
  // }else{
  //   video.pause();
  // }
}

// Change button icon when play or pause
function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon
}

// Hook Up the event listener

//1- Play and Pause the video, click on image or button
video.addEventListener('click', togglePlay);
//1.a - Listen status of the video to call updateButton function
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);
