const video = document.querySelector("video");
const btn = document.querySelector("a");
//initialisation 
if (video.paused) {
  btn.textContent = `▶️`;
} else {
  btn.textContent = `⏸️`;
}

btn.addEventListener("click", () => {
  video.paused
    ? (video.play(), (btn.textContent = ` ⏸️`))
    : (video.pause(), (btn.textContent = `▶️`));
});
