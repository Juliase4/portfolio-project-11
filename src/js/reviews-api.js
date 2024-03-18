import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const reviewsList = document.querySelector('.reviews-list');

const API_URL = 'https://portfolio-js.b.goit.study/api/reviews';
const requestOptions = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
  },
};

let reviews = [];

async function fetchReviews() {
  try {
    const response = await fetch(API_URL, requestOptions);
    if (!response.ok) {
      throw new Error(`Network response was not ok ${response.status}`);
    }
    const data = await response.json();
    console.log('Reviews data:', data);
    reviews = data;
    renderReviews(reviews);

    // Викликаємо функцію ініціалізації Swiper після отримання даних
    initSwiper();
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

function renderReviews(reviews) {
  reviewsList.innerHTML = '';

  if (reviews) {
    reviewsList.innerHTML = reviews
      .map(
        ({ _id, author, avatar_url, review }) =>
          `<li class="reviews-item swiper-slide">
            <img class="reviews-img" src="${avatar_url}" 
            alt="about-me" width="48" height="48" />
            <h3 class="reviews-name">${author}</h3>
            <p class="reviews-comment">${review}</p>
          </li>`
      )
      .join('');
  }
}

function initSwiper() {
  const newSwiper = new Swiper('.reviews-cards', {
    modules: [Navigation],
    // loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    breakpoints: {
      375: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
  });
}

document.addEventListener('DOMContentLoaded', () => {
  fetchReviews();
});
