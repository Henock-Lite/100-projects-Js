let cards = document.querySelectorAll(".parent-cards");

window.addEventListener("scroll", () => {
  cards.forEach((card) => {
    let rect = card.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.80 && rect.bottom > 0) {
      card.classList.add("animation");
    } else {
      card.classList.remove("animation");
    }
  });
});
