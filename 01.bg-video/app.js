const video = document.querySelector("video");
const btn = document.querySelector("a");
//initialisation 
if (video.paused) {
  btn.textContent = ` Play ▶️`;
} else {
  btn.textContent = ` Pause ⏸️`;
}

btn.addEventListener("click", () => {
  video.paused
    ? (video.play(), (btn.textContent = ` Pause ⏸️`))
    : (video.pause(), (btn.textContent = `Play ▶️`));
});
