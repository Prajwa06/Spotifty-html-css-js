let songNum = 0;

const playbtn = document.querySelectorAll(".play-btn");
const audioPlayer = document.getElementById("audioPlayer");
const progressBar = document.getElementById("progressBar");
const playPauseBtn = document.getElementById("playPause");
const songname = document.getElementById("songname");

const miniprogressBar = document.getElementById("miniprogressBar");
const miniplayPauseBtn = document.getElementById("miniplayPause");
const minisongname = document.getElementById("minisongname");

const forward = document.getElementById("forward");
const backward = document.getElementById("backward");

const miniforward = document.getElementById("miniforward");
const minibackward = document.getElementById("minibackward");

const songs = [
  "Shaky Sanju Rathod, Isha Malviya (pagalall.com).mp3",
  "Admirin You.mp3",
  "Save Your Tears.mp3",
  "Laila Majnu 2018 - O Meri Laila Radio Version.mp3",
  "Chura Ke Dil Mera - Main Khiladi Tu Anari 320 Kbps.mp3",
  "Tum Se Teri Baaton Mein Aisa Uljha Jiya 320 Kbps.mp3",
  "Perfect - 320Kbps-(Mr-Jat.in).mp3",
  "Soorma 2018 - Ishq Di Baajiyaan.mp3",
  "Wavy Karan Aujla 320 Kbps.mp3",
  "Makhmali (PenduJatt.Com.Se).mp3",
];

function playSong(song) {
  audioPlayer.src = `songs/${song}`;
  audioPlayer.play();
  songname.innerHTML = song;
  minisongname.innerHTML = song;
  playPauseBtn.innerHTML = '<i class="icon">⏸</i>';
  miniplayPauseBtn.innerHTML = '<i class="icon">⏸</i>';
}

playbtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    currentIndex = index;
    playSong(songs[currentIndex]);
    songNum = index;
  });
});

playPauseBtn.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.innerHTML = '<i class="icon">⏸</i>';
  } else {
    audioPlayer.pause();
    playPauseBtn.innerHTML = '<i class="icon">▶</i>';
  }
});

miniplayPauseBtn.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    miniplayPauseBtn.innerHTML = '<i class="icon">⏸</i>';
  } else {
    audioPlayer.pause();
    miniplayPauseBtn.innerHTML = '<i class="icon">▶</i>';
  }
});

audioPlayer.addEventListener("timeupdate", () => {
  if (!isNaN(audioPlayer.duration)) {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progress || 0;
    miniprogressBar.value = progress || 0;
  }
});

// Seek from desktop bar
progressBar.addEventListener("input", () => {
  if (!isNaN(audioPlayer.duration)) {
    const seekTime = (progressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
    miniprogressBar.value = progressBar.value; // sync other bar
  }
});

// Seek from mobile bar
miniprogressBar.addEventListener("input", () => {
  if (!isNaN(audioPlayer.duration)) {
    const seekTime = (miniprogressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
    progressBar.value = miniprogressBar.value; // sync other bar
  }
});

// forward logic

forward.addEventListener("click", () => {
  if (songNum >= 9) {
    playSong(songs[0]);
    songNum=0;
  } else {
    playSong(songs[songNum + 1]);
    songNum++;
  }
});

miniforward.addEventListener("click", () => {
  if (songNum >= 9) {
    playSong(songs[0]);
    songNum=0;
  } else {
    playSong(songs[songNum + 1]);
    songNum++;
  }
});


// forward logic

backward.addEventListener("click", () => {
  if (songNum <= 0) {
    playSong(songs[9]);
    songNum=9;
  } else {
    playSong(songs[songNum -1]);
    songNum--;
  }
});

minibackward.addEventListener("click", () => {
  if (songNum <= 0) {
    playSong(songs[9]);
    songNum=9;
  } else {
    playSong(songs[songNum -1]);
    songNum--;
  }
});
