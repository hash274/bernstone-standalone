const menuToggle = document.querySelector('#menuToggle');
const siteNav = document.querySelector('#siteNav');

menuToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const form = document.querySelector('#contactForm');
const status = document.querySelector('#formStatus');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = form.elements.name.value.trim();
  const phone = form.elements.phone.value.trim();

  if (name.length < 2 || phone.replace(/\D/g, '').length < 10) {
    status.textContent = 'Вкажіть ім’я та коректний номер телефону.';
    status.style.color = '#9b3e2e';
    return;
  }

  status.textContent = 'Дякуємо! Ми зв’яжемося з вами найближчим часом.';
  status.style.color = '#236442';
  form.reset();
});
