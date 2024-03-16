// import Swiper JS
import Swiper from 'swiper';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlide = 0;

function showSlide(slideIndex) {
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
  updateButtons();
}

function updateButtons() {
  prevButton.disabled = currentSlide === 0;
  nextButton.disabled = currentSlide === slides.children.length - 1;
}

prevButton.addEventListener('click', () => {
  currentSlide--;
  showSlide(currentSlide);
});

nextButton.addEventListener('click', () => {
  currentSlide++;
  showSlide(currentSlide);
});

showSlide(currentSlide);
