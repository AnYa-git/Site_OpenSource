const track = document.querySelector(".tech-track");

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
