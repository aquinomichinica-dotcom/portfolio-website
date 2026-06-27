const imgOverlay = document.getElementById('imgOverlay');
const imgOverlayImg = document.getElementById('imgOverlayImg');
const imgOverlayClose = document.getElementById('imgOverlayClose');

document.querySelectorAll('.project-card img').forEach(img => {
  img.addEventListener('click', () => {
    imgOverlayImg.src = img.src;
    imgOverlay.classList.add('active');
  });
});

