const navigationList = document.querySelector('.navigation-list'),
  ballroomModal = document.querySelector('.ballroom-modal'),
  choreographyModal = document.querySelector('.choreography-modal'),
  soloLatinModal = document.querySelector('.solo-latin-modal'),
  weddingDanceModal = document.querySelector('.wedding-dance-modal'),
  socialDanceModal = document.querySelector('.social-dance-modal'),
  ballroomMoreBtn = document.querySelector('.ballroom-more'),
  choreographyMoreBtn = document.querySelector('.choreography-more'),
  soloLatinMoreBtn = document.querySelector('.solo-latin-more'),
  weddingDanceMoreBtn = document.querySelector('.wedding-dance-more'),
  socialDanceMoreBtn = document.querySelector('.social-dance-more'),
  burgerMenu = document.querySelector('.burger-menu'),
  modalClose = document.querySelectorAll('.modal-close');
function scrollToActiveSection(e) {
  document.querySelector(`#${e}`).scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function onScroll() {
  const e = window.scrollY,
    o = document.querySelectorAll('section'),
    t = document.querySelectorAll('.navigation-list a');
  o.forEach((o) => {
    o.offsetTop <= e + 90 &&
      o.offsetTop + o.offsetHeight > e + 90 &&
      (document.querySelector('.popover__wrapper').classList.remove('scroll'),
      t.forEach((e) => {
        e.closest('.navigation-item').classList.remove('active-item'),
          o.getAttribute('id') === e.dataset.link &&
            (e.closest('.navigation-item').classList.add('active-item'),
            'courses' === o.id &&
              document.querySelector('.popover__wrapper').classList.add('scroll')),
          e.addEventListener('mouseover', () =>
            e.closest('.navigation-item').classList.add('active-item'),
          ),
          e.addEventListener('mouseleave', () => {
            console.log(123), e.closest('.navigation-item').classList.remove('active-item');
          });
      }));
  });
}
burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger-menu_active'),
    document.querySelector('.navigation').classList.toggle('hidden'),
    document.querySelector('body').classList.toggle('scroll-hidden');
}),
  navigationList.addEventListener('click', (e) => {
    e.preventDefault();
    const o = document.querySelectorAll('.navigation-item'),
      t = document.querySelector('.navigation-item-courses'),
      c = e.target.dataset.link,
      r = document.querySelector('.navigation-list');
    e.target !== r &&
      (o.forEach((e) => {
        e.classList.contains('active-item') && e.classList.remove('active-item');
      }),
      e.target === t
        ? document.querySelector('.popover__content').classList.toggle('show-content')
        : (e.target.closest('.navigation-item').classList.add('active-item'),
          document.querySelector('.popover__content').classList.remove('show-content'),
          document.querySelector('.navigation').classList.add('hidden'),
          burgerMenu.classList.remove('burger-menu_active'),
          document.querySelector('body').classList.remove('scroll-hidden'),
          document.querySelector('.popover__content').classList.remove('show-content')),
      e.target !== t && scrollToActiveSection(c));
  }),
  ballroomMoreBtn.addEventListener('click', () => {
    ballroomModal.classList.add('open'),
      document.querySelector('body').classList.add('scroll-hidden');
  }),
  choreographyMoreBtn.addEventListener('click', () => {
    choreographyModal.classList.add('open'),
      document.querySelector('body').classList.add('scroll-hidden');
  }),
  soloLatinMoreBtn.addEventListener('click', () => {
    soloLatinModal.classList.add('open'),
      document.querySelector('body').classList.add('scroll-hidden');
  }),
  weddingDanceMoreBtn.addEventListener('click', () => {
    weddingDanceModal.classList.add('open'),
      document.querySelector('body').classList.add('scroll-hidden');
  }),
  socialDanceMoreBtn.addEventListener('click', () => {
    socialDanceModal.classList.add('open'),
      document.querySelector('body').classList.add('scroll-hidden');
  }),
  modalClose.forEach((e) =>
    e.addEventListener('click', () => {
      document.querySelectorAll('.modal__wrapper').forEach((e) => e.classList.remove('open')),
        document.querySelector('body').classList.remove('scroll-hidden');
    }),
  ),
  document.addEventListener('scroll', onScroll),
  document
    .querySelector('.popover__wrapper')
    .addEventListener('mouseleave', () =>
      document.querySelector('.popover__content').classList.remove('show-content'),
    );
