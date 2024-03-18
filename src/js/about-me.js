import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const container = document.querySelector('.advantages');

const advantagesList = [
  {
    title: 'ABOUT ME',
    firstItem:
      'I am Lloyd Jefferson, a talented programmer with extensive expertise in software development. I have an understanding of different programming languages ​​and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way. Able to work both independently and in a team. I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions. Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work.I am always looking for opportunities for self-improvement. I actively study new technologies and practices to stay abreast of the latest innovations. I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software. Able to work both independently and in a team. I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions.',
    secondItem:
      ' Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work.I am always looking for opportunities for self-improvement. I actively study new technologies and practices to stay abreast of the latest innovations. I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software.',
  },
  {
    title: 'ROLE',
    firstItem: 'Frontend development',
    secondItem: 'HeadlessCMS,Wordpress',
    thirdItem: 'Blender(enjoy)',
  },
  {
    title: 'EDUCATION',
    firstItem:
      '2018 - 2019 / Frontend Development Diploma, GoIT IT School, New York',
    secondItem:
      '2019 - 2020 / Advanced Web Development Certificate, GoIT IT School,New York',
    thirdItem: '2020 - 2022 / Advanced Blender Animation Techniques, Udemy',
  },
];

function createAdvantagesEl() {
  const markup = advantagesList
    .map(
      ({ title, firstItem, secondItem, thirdItem = '' }) =>
        `<li class="advantages__item">
    <div class="advantages__ac">
      <h2 class="advantages__title">${title}</h2>
    </div>
    <div class="advantages__panel">
      <p class="advantages__text about">
        ${firstItem}
      </p>
      <p class="advantages__text about">
       ${secondItem}
      </p>
      <p class="advantages__text about">
       ${thirdItem}
      </p>
    </div>
  </li>`
    )
    .join('');

  container.insertAdjacentHTML('afterbegin', markup);
}

createAdvantagesEl();

new Accordion(container, {
  duration: 400,
  showMultiple: true,
  elementClass: 'advantages__item',
  triggerClass: 'advantages__ac',
  panelClass: 'advantages__panel',
});

// <svg class="advantages__icon" width="18" height="18">
//           <use href="./img/icons/sprite.svg#icon-arrow-down"></use>
//         </svg>

const mySwiper = new Swiper('.my-swiper', {
  modules: [Navigation],
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.about__section .swiper-button-next',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  //Керування колесом миші
  mousewheel: {
    //Чутливість колеса миші
    sensitivity: 1,
    //Керування колесом миші
    eventsTarget: '.swiper-slide',
  },

  //Кількість слайдів для показу
  slidesPerView: 1,
  slidesPerGroup: 1,

  breakpoints: {
    // when window width is >= 375px
    375: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
  },
});

document.addEventListener('keydown', evt => {
  console.log(evt.code);
});
