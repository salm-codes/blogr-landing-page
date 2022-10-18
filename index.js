const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', function () {
  mobileMenu.classList.toggle('disabled');
  hamburger.classList.toggle('showing-close');
});
