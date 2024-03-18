import Swiper from 'swiper';

const reviewsList = document.querySelector('.reviews-list');
const prevButton = document.querySelector('.rev-swiper-button-prev-js');
const nextButton = document.querySelector('.rev-swiper-button-next-js');

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
      updateItemsPerPage();
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
    currentPage++;
  } else {
    currentPage--;
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
    disableButton(nextButton);
  } else {
    // Рендерити відгуки, які потрібно показати
    reviewsList.innerHTML = reviewsToShow
      .map(
        ({ _id, author, avatar_url, review }) =>
          `<li class="reviews-item rev-swiper-slide-js" id='${_id}'>
            <img class="reviews-img" src="${avatar_url}" 
            alt="about-me" width="48" height="48" />
            <h3 class="reviews-name">${author}</h3>
            <p class="reviews-comment">${review}</p>
          </li>`
      )
      .join('');
    enableButton(nextButton);
  }

  if (currentPage === 0) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }

  if (endIndex >= reviews.length) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
}

// Функція для відключення кнопки
function disableButton(button) {
  button.disabled = true;
  button.classList.add('disabled');
}

// Функція для включення кнопки
function enableButton(button) {
  button.disabled = false;
  button.classList.remove('disabled');
}

function updateItemsPerPage() {
  const windowWidth = window.innerWidth;

  if (windowWidth < 768) {
    itemsPerPage = 1;
  } else if (windowWidth >= 768 && windowWidth < 1439) {
    itemsPerPage = 2;
  } else {
    itemsPerPage = 4;
  }
}

document.addEventListener('DOMContentLoaded', fetchReviews);

window.addEventListener('resize', () => {
  updateItemsPerPage();
  renderReviews();
});
