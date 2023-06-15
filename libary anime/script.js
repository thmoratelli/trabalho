const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.card-slider');

cards.forEach(card => {
  slider.appendChild(card.cloneNode(true));
});

