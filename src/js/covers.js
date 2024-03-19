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

// document.addEventListener('DOMContentLoaded', moveCovers);
// window.addEventListener('scroll', moveCovers);

const coverSection = document.querySelector('.covers-section');
const coversList = document.querySelectorAll('.covers-list');
let coversWidthArr = [];

coversList.forEach(cover => {
  coversWidthArr.push(cover.scrollWidth);
});

const coverMaxWidth = Math.max(...coversWidthArr);

let currentOffset = -coverMaxWidth;
let isForward = true;

function moveCovers() {
  const sectionRect = coverSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (sectionRect.top < windowHeight && sectionRect.bottom > 0) {
    coversList.forEach(cover => {
      const offsetPercentage = ((currentOffset + coverMaxWidth) / coverMaxWidth) * 100;
      cover.style.transition = 'transform .5s';
      cover.style.transform = `rotate(16deg) translateX(${-offsetPercentage}%)`;

      if (isForward) {
        currentOffset++;
        if (currentOffset >= 0) {
          isForward = false;
        }
      } else {
        currentOffset--;
        if (currentOffset <= -coverMaxWidth) {
          isForward = true;
        }
      }
    });
  }
  
  requestAnimationFrame(moveCovers);
}

moveCovers();
