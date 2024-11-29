window.addEventListener("DOMContentLoaded", () => {
  const loading = document.querySelector(".loader-parent");
  setTimeout(() => {
    loading.style.display = "none"; // Cache l'élément loader
  }, 1000);

});
