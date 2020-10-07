import '../style/scss/index.scss';

const navigationList = document.querySelector('.navigation-list');

const ballroomModal = document.querySelector('.ballroom-modal');
const choreographyModal = document.querySelector('.choreography-modal');
const soloLatinModal = document.querySelector('.solo-latin-modal');
const weddingDanceModal = document.querySelector('.wedding-dance-modal');

const ballroomMoreBtn = document.querySelector('.ballroom-more');
const choreographyMoreBtn = document.querySelector('.choreography-more');
const soloLatinMoreBtn = document.querySelector('.solo-latin-more');
const weddingDanceMoreBtn = document.querySelector('.wedding-dance-more');

const burgerMenu = document.querySelector('.burger-menu');

const modalWrapper = document.querySelectorAll('.modal__wrapper');

const previewArrowDown = document.querySelector('.preview-arrow-down');
const logoImage = document.querySelector('.logo-image');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger-menu_active');
  document.querySelector('.navigation__wrapper').classList.toggle('hidden');
  document.querySelector('body').classList.toggle('scroll-hidden');
});

navigationList.addEventListener('click', (event) => {
  event.preventDefault();

  const navigationItems = document.querySelectorAll('.navigation-item');
  const courses = document.querySelector('.navigation-item-courses');
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
      document.querySelector('.navigation__wrapper').classList.add('hidden');
      burgerMenu.classList.remove('burger-menu_active');
      document.querySelector('body').classList.remove('scroll-hidden');
      document.querySelector('.popover__content').classList.remove('show-content');
    }

    if (event.target !== courses) {
      const targetValue = event.target.getAttribute('href');
      smoothScroll(targetValue, 500);
    }
  }
});

previewArrowDown.addEventListener('click', (event) =>
  smoothScroll(event.target.getAttribute('href'), 500),
);

logoImage.addEventListener('click', (event) =>
  smoothScroll(event.target.closest('a').getAttribute('href'), 500),
);

function smoothScroll(targetValue, duration) {
  const headerHeight = 80;
  const target = document.querySelector(targetValue);
  const targetPosition = target.getBoundingClientRect().top - headerHeight;
  const startPosition = window.pageYOffset;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;

    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
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

modalWrapper.forEach((el) =>
  el.addEventListener('click', (event) => {
    if (event.target.dataset.close === 'true') {
      document.querySelectorAll('.modal__wrapper').forEach((el) => el.classList.remove('open'));
      document.querySelector('body').classList.remove('scroll-hidden');
    }
  }),
);

function onScroll() {
  const curPos = window.scrollY;
  const section = document.querySelectorAll('section');
  const links = document.querySelectorAll('.navigation-list a');

  const courses = document.querySelector('#courses');
  const coursesTop = courses.getBoundingClientRect().top;

  const joinToGroupBtn = document.querySelector('.join-to-group');

  if (coursesTop < 62) {
    joinToGroupBtn.style.opacity = 1;
  } else {
    joinToGroupBtn.style.opacity = 0;
  }

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
          a.closest('.navigation-item').classList.remove('active-item');
        });
      });
    }
  });
}

document.addEventListener('scroll', onScroll);

document.querySelector('.popover__wrapper').addEventListener('mouseleave', () => {
  document.querySelector('.popover__content').classList.remove('show-content');
});
