const navigationList = document.querySelector('.navigation-list');

const ballroomModal = document.querySelector('.ballroom-modal');
const choreographyModal = document.querySelector('.choreography-modal');
const soloLatinModal = document.querySelector('.solo-latin-modal');
const weddingDanceModal = document.querySelector('.wedding-dance-modal');
const socialDanceModal = document.querySelector('.social-dance-modal');

const ballroomMoreBtn = document.querySelector('.ballroom-more');
const choreographyMoreBtn = document.querySelector('.choreography-more');
const soloLatinMoreBtn = document.querySelector('.solo-latin-more');
const weddingDanceMoreBtn = document.querySelector('.wedding-dance-more');
const socialDanceMoreBtn = document.querySelector('.social-dance-more');

const burgerMenu = document.querySelector('.burger-menu');

const modalClose = document.querySelectorAll('.modal-close');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger-menu_active');
  document.querySelector('.navigation').classList.toggle('hidden');
});

navigationList.addEventListener('click', (event) => {
  document.querySelectorAll('.navigation-item').forEach((el) => el.classList.remove('active-item'));
  event.target.closest('.navigation-item').classList.add('active-item');

  if (document.querySelector('.navigation')) {
    document.querySelector('.navigation').classList.add('hidden');
    burgerMenu.classList.remove('burger-menu_active');
  }
});

ballroomMoreBtn.addEventListener('click', () => {
  ballroomModal.classList.add('open');
});

choreographyMoreBtn.addEventListener('click', () => {
  choreographyModal.classList.add('open');
});

soloLatinMoreBtn.addEventListener('click', () => {
  soloLatinModal.classList.add('open');
});

weddingDanceMoreBtn.addEventListener('click', () => {
  weddingDanceModal.classList.add('open');
});

socialDanceMoreBtn.addEventListener('click', () => {
  socialDanceModal.classList.add('open');
});

modalClose.forEach((el) =>
  el.addEventListener('click', () => {
    document.querySelectorAll('.modal__wrapper').forEach((el) => el.classList.remove('open'));
  }),
);
