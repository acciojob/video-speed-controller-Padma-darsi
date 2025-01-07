const video = document.querySelector(".player__video");
const playButton = document.querySelector(".player__button");
const progressBar = document.querySelector(".player__progress");
const progressFilled = document.querySelector(".progress__filled");
const volumeControl = document.querySelector(".player__volume");
const speedControl = document.querySelector(".player__speed");
const rewindButton = document.querySelector(".player__skip.rewind");
const forwardButton = document.querySelector(".player__skip.forward");

playButton.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);
progressBar.addEventListener("input", setProgress);
volumeControl.addEventListener("input", adjustVolume);
speedControl.addEventListener("input", adjustSpeed);
rewindButton.addEventListener("click", rewindVideo);
forwardButton.addEventListener("click", skipForward);

function togglePlayPause() {
  if (video.paused) {
    video.play();
    playButton.textContent = "❚ ❚"; // Update button to pause symbol
  } else {
    video.pause();
    playButton.textContent = "►"; // Update button to play symbol
  }
}

function updateProgressBar() {
  const percentage = (video.currentTime / video.duration) * 100;
  progressBar.value = percentage;
  progressFilled.style.width = `${percentage}%`;
}

function setProgress() {
  const newTime = (progressBar.value / 100) * video.duration;
  video.currentTime = newTime;
}

function adjustVolume() {
  video.volume = volumeControl.value;
}

function adjustSpeed() {
  video.playbackRate = speedControl.value;
}

function rewindVideo() {
  video.currentTime -= 10; // Rewind 10 seconds
}

function skipForward() {
  video.currentTime += 25; // Skip forward 25 seconds
}
