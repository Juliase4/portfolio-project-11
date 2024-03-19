const closeButton = document.querySelector('.mobile-menu-close-btn');
const burgerBtn = document.querySelector('.header-mobile-open-btn');
const menu = document.querySelector('.mobile-menu');
const menuItems = document.querySelectorAll('.mob-menu-list-item');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('is-open');
  });
});

closeButton.addEventListener('click', () => {
  menu.classList.toggle('is-open');
});

burgerBtn.addEventListener('click', () => {
  menu.classList.toggle('is-open');
});

const dropdownBtn = document.querySelector('.dropdown-nav-btn');
const dropdownList = document.querySelector('.dropdown-nav-list');

dropdownBtn.addEventListener('click', () => {
  dropdownList.classList.toggle('visually-hidden');
});
