import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


  const proSwiper = new Swiper('.project-swiper', {
    modules: [Navigation],
    navigation: {
      nextEl: '.project .swiper-button-next',
      prevEl: '.project .swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    breakpoints: {
      375: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1440: {
        slidesPerView: 1,
      },
    },
  });

