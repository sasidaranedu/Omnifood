// FOOTER YEAR UPDATE

const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// MOBILE NAV

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.section-header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

const allLinkEl = document.querySelectorAll('a:link');
console.log(allLinkEl);

allLinkEl.forEach(function (link) {
  link.addEventListener('click', function (e) {
    const href = link.getAttribute('href');

    if (link.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('nav-open');
    }
  });
});

// STICKY NAVIGATION

const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
  function (e) {
    const ent = e[0];

    if (!ent.isIntersecting) {
      document.body.classList.add('sticky');
    } else {
      document.body.classList.remove('sticky');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);

obs.observe(sectionHeroEl);
