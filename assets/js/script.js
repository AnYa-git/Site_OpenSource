const scrollBtn = document.getElementById("scrollTopBtn");

/* -------------------------------
BOUTON DE SCROLL VERS LE HAUT
--------------------------------- */

// Afficher le bouton après avoir scrollé
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

// Scroll en douceur vers le haut
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
