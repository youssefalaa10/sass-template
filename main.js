// Nav Bar Section
let navToggler = document.querySelector(".nav-toggle-btn");
let nav = document.querySelector(".navmenu");

navToggler.addEventListener("click", () => {
  nav.classList.toggle("show");
});
// Hero Section
document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "../../images/slide-1.jpg",
    "../../images/slide-2.jpg",
    "../../images/slide-3.jpg"
  ];
  let currentIndex = 0;

  const hero = document.querySelector('.hero');
  const leftArrow = document.querySelector('.hero__arrow--left');
  const rightArrow = document.querySelector('.hero__arrow--right');

  function updateBackground() {
    hero.style.backgroundImage = `url(${images[currentIndex]})`;
  }

  function slideToNextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateBackground();
  }

  function slideToPreviousImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateBackground();
  }

  leftArrow.addEventListener('click', slideToPreviousImage);
  rightArrow.addEventListener('click', slideToNextImage);

  updateBackground();

  setInterval(slideToNextImage, 8000);
});
// Menu Image Section
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.menu-image__container');
  const images = document.querySelectorAll('.menu-image__container img');
  const imageWidth = images[0].clientWidth;
  const totalImages = images.length;
  let currentIndex = 0;

  function slideImages() {
    currentIndex++;
    container.style.transition = 'transform 1s ease-in-out';
    container.style.transform = `translateX(-${currentIndex * imageWidth}px)`;

    if (currentIndex >= totalImages / 2) {
      setTimeout(() => {
        container.style.transition = 'none';
        container.style.transform = 'translateX(0px)';
        currentIndex = 0;
      }, 1000); 
    }
  }

  setInterval(slideImages, 7000);
});

