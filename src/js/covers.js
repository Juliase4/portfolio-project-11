// const coversLists = document.querySelectorAll('.covers-list');
// let animationId;
// let isAnimating = false;

// function moveCovers() {
//   if (isAnimating) return;
//   isAnimating = true;

//   const coversSection = document.querySelector('.covers-section');
//   const coversSectionRect = coversSection.getBoundingClientRect();
//   const isCoversSectionVisible =
//     coversSectionRect.top < window.innerHeight && coversSectionRect.bottom >= 0;

//   if (!isCoversSectionVisible) {
//     cancelAnimationFrame(animationId);
//     isAnimating = false;
//     return;
//   }

//   let allCoversOutsideViewport = true;

//   coversLists.forEach(list => {
//     const covers = list.querySelectorAll('.covers-item');
//     covers.forEach(cover => {
//       let currentPosition =
//         parseFloat(
//           cover.style.transform.replace('translateX(', '').replace('px)', '')
//         ) || 0;
//       currentPosition -= 0.3;
//       cover.style.transform = `translateX(${currentPosition}px)`;

//       if (currentPosition <= list.offsetWidth) {
//         allCoversOutsideViewport = false;
//       }
//     });
//   });

//   if (allCoversOutsideViewport) {
//     coversLists.forEach(list => {
//       const covers = list.querySelectorAll('.covers-item');
//       covers.forEach(cover => {
//         cover.style.transform = 'translateX(0)';
//       });
//     });
//   }

//   animationId = requestAnimationFrame(() => {
//     isAnimating = false;
//     moveCovers();
//   });
// }



const coverLists = document.querySelectorAll('.covers-list');
const coverSection = document.querySelector('.covers-section');

coverLists.forEach(elem=> {
  const coversItems = elem.querySelectorAll('.covers-item');
  const elementsCount = -coversItems.length * 22 + "%";

  elem.style.setProperty('--elementsCount', elementsCount);
})


function addActiveClass() {
  const sectionRect = coverSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (sectionRect.top < windowHeight && sectionRect.bottom > 0) {
    coverSection.classList.add('animation');
  } else {
    coverSection.classList.remove('animation');
  }
}


addActiveClass();

window.addEventListener('scroll', addActiveClass);