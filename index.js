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
  document.querySelector('body').classList.toggle('scroll-hidden');
});

navigationList.addEventListener('click', (event) => {
  event.preventDefault();

  const navigationItems = document.querySelectorAll('.navigation-item');
  const courses = document.querySelector('.navigation-item-courses');
  const activeSection = event.target.dataset.link;
  const navigation = document.querySelector('.navigation-list');

  if (event.target !== navigation) {
    navigationItems.forEach((el) => {
      if (el.classList.contains('active-item')) {
        el.classList.remove('active-item');
      }
    });

    if (event.target === courses) {
      document.querySelector('.popover__content').classList.toggle('show-content');
    } else {
      event.target.closest('.navigation-item').classList.add('active-item');
      document.querySelector('.popover__content').classList.remove('show-content');
      document.querySelector('.navigation').classList.add('hidden');
      burgerMenu.classList.remove('burger-menu_active');
      document.querySelector('body').classList.remove('scroll-hidden');
      document.querySelector('.popover__content').classList.remove('show-content');
    }

    if (event.target !== courses) {
      scrollToActiveSection(activeSection);
    }
  }
});

function scrollToActiveSection(activeSection) {
  const section = document.querySelector(`#${activeSection}`);

  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

ballroomMoreBtn.addEventListener('click', () => {
  ballroomModal.classList.add('open');
  document.querySelector('body').classList.add('scroll-hidden');
});

choreographyMoreBtn.addEventListener('click', () => {
  choreographyModal.classList.add('open');
  document.querySelector('body').classList.add('scroll-hidden');
});

soloLatinMoreBtn.addEventListener('click', () => {
  soloLatinModal.classList.add('open');
  document.querySelector('body').classList.add('scroll-hidden');
});

weddingDanceMoreBtn.addEventListener('click', () => {
  weddingDanceModal.classList.add('open');
  document.querySelector('body').classList.add('scroll-hidden');
});

socialDanceMoreBtn.addEventListener('click', () => {
  socialDanceModal.classList.add('open');
  document.querySelector('body').classList.add('scroll-hidden');
});

modalClose.forEach((el) =>
  el.addEventListener('click', () => {
    document.querySelectorAll('.modal__wrapper').forEach((el) => el.classList.remove('open'));
    document.querySelector('body').classList.remove('scroll-hidden');
  }),
);

document.addEventListener('scroll', onScroll);

function onScroll() {
  const curPos = window.scrollY;
  const section = document.querySelectorAll('section');
  const links = document.querySelectorAll('.navigation-list a');

  section.forEach((el) => {
    if (el.offsetTop <= curPos + 90 && el.offsetTop + el.offsetHeight > curPos + 90) {
      document.querySelector('.popover__wrapper').classList.remove('scroll');

      links.forEach((a) => {
        a.closest('.navigation-item').classList.remove('active-item');

        if (el.getAttribute('id') === a.dataset.link) {
          a.closest('.navigation-item').classList.add('active-item');

          if (el.id === 'courses') {
            document.querySelector('.popover__wrapper').classList.add('scroll');
          }
        }

        a.addEventListener('mouseover', () =>
          a.closest('.navigation-item').classList.add('active-item'),
        );
        a.addEventListener('mouseleave', () => {
          console.log(123);
          a.closest('.navigation-item').classList.remove('active-item');
        });
      });
    }
  });
}

document
  .querySelector('.popover__wrapper')
  .addEventListener('mouseleave', () =>
    document.querySelector('.popover__content').classList.remove('show-content'),
  );
