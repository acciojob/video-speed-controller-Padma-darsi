
   const video = document.querySelector('.player__video');
const playButton = document.querySelector('.player__button');
const rewindButton = document.querySelector('.player__skip.rewind');
const forwardButton = document.querySelector('.player__skip.forward');
const progressBar = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const volumeControl = document.querySelector('#volume');
const speedControl = document.querySelector('#speed');

// Toggle Play/Pause
playButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playButton.textContent = '❚ ❚'; // Change button text to pause
  } else {
    video.pause();
    playButton.textContent = '►'; // Change button text to play
  }
});

// Rewind 10 seconds
rewindButton.addEventListener('click', () => {
  video.currentTime -= 10; // Decrease the current time by 10 seconds
});

// Skip forward 25 seconds
forwardButton.addEventListener('click', () => {
  video.currentTime += 25; // Increase the current time by 25 seconds
});

// Volume Control
volumeControl.addEventListener('input', (e) => {
  video.volume = e.target.value;
});

// Playback Speed Control
speedControl.addEventListener('input', (e) => {
  video.playbackRate = e.target.value;
});

// Update Progress Bar as the video plays
video.addEventListener('timeupdate', () => {
  const progress = (video.currentTime / video.duration) * 100;
  progressBar.value = progress;
  progressFilled.style.width = `${progress}%`;
});

// Update video time when clicking on progress bar
progressBar.addEventListener('input', (e) => {
  const seekTime = (e.target.value / 100) * video.duration;
  video.currentTime = seekTime;
});
