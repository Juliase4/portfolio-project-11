const closeButton = document.querySelector('.mobile-menu-close-btn');
const burgerBtn = document.querySelector('.header-mobile-open-btn');
const menu = document.querySelector('.mobile-menu');
const menuItems = document.querySelectorAll('.mob-menu-list-item');
const menuBtn = document.querySelectorAll('.mob-button-link');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('is-open');
  });
});

menuBtn.forEach(link => {
  link.addEventListener('click', () => {
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

  if (dropdownList.classList.contains('visually-hidden')) {
  dropdownList.style.opacity= '1'
  dropdownList.style.transition= 'opacity 0.5s ease-in-out 0.5s';
  dropdownList.classList.remove('visually-hidden');
  } else {
  dropdownList.style.opacity = '0';
  dropdownList.classList.add('visually-hidden');
  }
}
)

