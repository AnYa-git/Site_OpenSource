const track = document.querySelector(".tech-track");

const scrollBtn = document.getElementById("scrollTopBtn");

/* -------------------------------
CARROUSEL INFINI
--------------------------------- */

// Cloner tous les items pour avoir un défilement infini
track.innerHTML += track.innerHTML;

let position = 0;
const speed = 1; // vitesse en px par frame

function animateCarousel() {
  position -= speed;
  if (position <= -track.scrollWidth / 2) {
    position = 0;
  }
  track.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animateCarousel);
}

animateCarousel();

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
