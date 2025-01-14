/* ----------------- FILM CAROUSEL (Section #2) ----------------- */
const filmSection = document.querySelector('section:nth-of-type(2)');
const filmUl = filmSection.querySelector('ul');
const filmItems = filmUl.querySelectorAll('li');
const filmPrev = filmSection.querySelector('button:nth-of-type(1)');
const filmNext = filmSection.querySelector('button:nth-of-type(2)');

let filmIndex = 0; // Start at 0
const filmTotal = filmItems.length;

/**
 * Center the active slide
 * Because there are 3 slides per view, we can shift by (index * 33.333)
 * Loop seamlessly by using modulus
 */
function updateFilmCarousel() {
  filmItems.forEach((item, i) => {
    item.classList.toggle('active', i === filmIndex);
  });
  // Move so filmIndex is centered among 3 slides
  filmUl.style.transform = `translateX(-${(filmIndex) * 15}%)`;
}

function nextFilm() {
  filmIndex = (filmIndex + 1) % filmTotal;
  updateFilmCarousel();
}

function prevFilm() {
  // (filmIndex - 1 + filmTotal) % filmTotal ensures we stay in range
  filmIndex = (filmIndex - 1 + filmTotal) % filmTotal;
  updateFilmCarousel();
}

// Listeners for film
filmNext.addEventListener('click', nextFilm);
filmPrev.addEventListener('click', prevFilm);
updateFilmCarousel();



/* ----------------- NIEUWS CAROUSEL (Section #5) ----------------- */
const nieuwsSection = document.querySelector('section:nth-of-type(5)');
const nieuwsUl = nieuwsSection.querySelector('ul');
const nieuwsItems = nieuwsUl.querySelectorAll('li');
const nieuwsPrev = nieuwsSection.querySelector('button:nth-of-type(1)');
const nieuwsNext = nieuwsSection.querySelector('button:nth-of-type(2)');

let nieuwsIndex = 0;
const nieuwsTotal = nieuwsItems.length;

function updateNieuwsCarousel() {
  nieuwsItems.forEach((item, i) => {
    item.classList.toggle('active', i === nieuwsIndex);
  });
  nieuwsUl.style.transform = `translateX(-${nieuwsIndex * 72}%)`;
}

function nextNieuws() {
  nieuwsIndex = (nieuwsIndex + 1) % nieuwsTotal;
  updateNieuwsCarousel();
}

function prevNieuws() {
  nieuwsIndex = (nieuwsIndex - 1 + nieuwsTotal) % nieuwsTotal;
  updateNieuwsCarousel();
}

// Listeners for nieuws
nieuwsNext.addEventListener('click', nextNieuws);
nieuwsPrev.addEventListener('click', prevNieuws);
updateNieuwsCarousel();









/* HAMBURGERMENUUUUUUUUUU */

const menuPanel = document.querySelector('.menu-panel');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', function(e) {
  e.preventDefault();
  menuPanel.classList.toggle('active');

  // Zorgt ervoor dat aria-hidden wordt gehandghaafd
menuPanel.setAttribute('aria-hidden', !menuPanel.classList.contains('active'));
});

// Set initial state
menuPanel.setAttribute('aria-hidden', 'true');

document.addEventListener('click', function(event) {
  if (menuPanel.classList.contains('active') && 
      !menuPanel.contains(event.target) && 
      !menuToggle.contains(event.target)) {
    menuPanel.classList.remove('active');
  }
});


/* DARKMODEEEEEEE https://www.youtube.com/watch?v=wodWDIdV9BY */

const darkModeToggle = document.querySelector('.darkmode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', (e) => {
  e.preventDefault();
  body.classList.toggle('darkmode');
  
  // Store preference
  const isDarkMode = body.classList.contains('darkmode');
  localStorage.setItem('darkmode', isDarkMode);
});

// Check for saved preference
if (localStorage.getItem('darkmode') === 'true') {
  body.classList.add('darkmode');
}