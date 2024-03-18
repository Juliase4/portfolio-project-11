import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import iziToast from 'izitoast';

const reviewsList = document.querySelector('.reviews-list');
const prevButton = document.querySelector(
  '.reviews-slider-arrow.swiper-button-prev'
);
const nextButton = document.querySelector(
  '.reviews-slider-arrow.swiper-button-next'
);

const API_URL = 'https://portfolio-js.b.goit.study/api/reviews';
const requestOptions = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
  },
};

let itemsPerPage = 1;
let currentPage = 0;
let reviews = [];

const swiper = new Swiper('.reviews-swiper', {
  modules: [Navigation],

  // Navigation arrows
  navigation: {
    nextEl: '.reviews .swiper-button-next',
    prevEl: '.reviews .swiper-button-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  //Кількість слайдів для показу
  slidesPerView: 1,
  // slidesPerGroup: 4,
  speed: 4000,

  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});

function fetchReviews() {
  return fetch(API_URL, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Reviews data:', data);
      reviews = data;
      swiper.navigation.update({
        breakpoints: {
          375: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 4,
          },
        },
      });
      renderReviews();
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}

nextButton.addEventListener('click', () => handlePageChange('next'));
prevButton.addEventListener('click', () => handlePageChange('prev'));

function handlePageChange(direction) {
  if (direction === 'next') {
    swiper.navigation.update({
      nextEl: '.reviews .swiper-button-next',
    });
  } else {
    swiper.navigation.update({
      nextEl: '.reviews .swiper-button-prev',
    });
  }
  renderReviews();
}

function renderReviews() {
  // Отримати підмасив з відгуками для поточної сторінки
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const reviewsToShow = reviews.slice(startIndex, endIndex);

  // Очистити список перед відображенням нових відгуків
  reviewsList.innerHTML = '';

  if (reviewsToShow.length === 0) {
    swiper.navigation.update({
      nextEl: '.reviews .swiper-button-next',
      disabled: true,
    });
  } else {
    // Рендерити відгуки, які потрібно показати
    reviewsList.innerHTML = reviewsToShow
      .map(
        ({ _id, author, avatar_url, review }) =>
          `<li class="reviews-item swiper-slide" id='${_id}'>
            <img class="reviews-img" src="${avatar_url}" 
            alt="about-me" width="48" height="48" />
            <h3 class="reviews-name">${author}</h3>
            <p class="reviews-comment">${review}</p>
          </li>`
      )
      .join('');
    swiper.navigation.update({
      nextEl: '.reviews .swiper-button-next',
      disabled: false,
    });
  }

  // Перевірка, чи потрібно задізейблити кнопку попереднього слайду
  if (startIndex === 0) {
    swiper.navigation.update({
      prevEl: '.reviews .swiper-button-prev',
      disabled: true,
    });
  } else {
    swiper.navigation.update({
      prevEl: '.reviews .swiper-button-prev',
      disabled: false,
    });
  }

  // Перевірка, чи потрібно задізейблити кнопку наступного слайду
  if (endIndex >= reviews.length) {
    swiper.navigation.update({
      nextEl: '.reviews .swiper-button-next',
      disabled: true,
    });
  } else {
    swiper.navigation.update({
      nextEl: '.reviews .swiper-button-next',
      disabled: false,
    });
  }
}

document.addEventListener('DOMContentLoaded', fetchReviews);

window.addEventListener('resize', () => {
  swiper.navigation.update({
    breakpoints: {
      375: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 4,
      },
    },
  });
  renderReviews();
});
