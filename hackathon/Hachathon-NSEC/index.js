const card = document.querySelector('.card');
const hoverDistance = 5; // Adjust for desired movement amount (in pixels)

function moveCard(offsetX) {
  card.style.transform = `translateX(${offsetX}px)`;
}

card.addEventListener('mouseenter', () => {
  moveCard(hoverDistance);
});

card.addEventListener('mouseleave', () => {
  moveCard(0);
});