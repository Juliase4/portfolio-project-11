const closeButton = document.querySelector('.mobile-menu-close-btn');
const burgerBtn = document.querySelector('.header-mobile-open-btn');
const menu = document.querySelector('.mobile-menu');

closeButton.addEventListener('click', () => {
  menu.classList.toggle('is-open');
});

burgerBtn.addEventListener('click', () => {
  menu.classList.toggle('is-open');
});

const dropdownBtn = document.querySelector('.dropdown-nav-dropbtn');
const dropdownList = document.querySelector('.dropdown-nav-list');

dropdownBtn.addEventListener('click', () => {
  dropdownList.classList.toggle('visually-hidden');
}
)

