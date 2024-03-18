const coversLists = document.querySelectorAll('.covers-list');
let animationId;
let isAnimating = false;

function moveCovers() {
  if (isAnimating) return;
  isAnimating = true;

  const coversSection = document.querySelector('.covers-section');
  const coversSectionRect = coversSection.getBoundingClientRect();
  const isCoversSectionVisible =
    coversSectionRect.top < window.innerHeight && coversSectionRect.bottom >= 0;

  if (!isCoversSectionVisible) {
    cancelAnimationFrame(animationId);
    isAnimating = false;
    return;
  }

  let allCoversOutsideViewport = true;

  coversLists.forEach(list => {
    const covers = list.querySelectorAll('.covers-item');
    covers.forEach(cover => {
      let currentPosition =
        parseFloat(
          cover.style.transform.replace('translateX(', '').replace('px)', '')
        ) || 0;
      currentPosition -= 3;
      cover.style.transform = `translateX(${currentPosition}px)`;

      if (currentPosition <= list.offsetWidth) {
        allCoversOutsideViewport = false;
      }
    });
  });

  if (allCoversOutsideViewport) {
    coversLists.forEach(list => {
      const covers = list.querySelectorAll('.covers-item');
      covers.forEach(cover => {
        cover.style.transform = 'translateX(0)';
      });
    });
  }

  animationId = requestAnimationFrame(() => {
    isAnimating = false;
    moveCovers();
  });
}

document.addEventListener('DOMContentLoaded', moveCovers);
window.addEventListener('scroll', moveCovers);
