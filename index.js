const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const menuItem = document.querySelectorAll('.menu-item');
const dropdown = document.querySelectorAll('.dropdown');

const navItem = document.querySelectorAll('.nav-item');
const dropdownMenu = document.querySelectorAll('.dropdown-menu');

const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', function () {
  mobileMenu.classList.toggle('disabled');
  hamburger.classList.toggle('showing-close');
  document.querySelector('html').classList.toggle('no-scroll');
});

function clear(c) {
  c.forEach(d => {
    d.classList.remove('active');
  });
}

function updateItem(item, id) {
  for (let i = 0; i < 3; i++) {
    if (Number(id) != i) {
      item[i].classList.remove('active');
    }
  }
}

menuItem.forEach(item => {
  item.addEventListener('click', function () {
    item.classList.add('active');
    clear(dropdown);
    dropdown[item.dataset.id].classList.toggle('active');
    updateItem(menuItem, item.dataset.id);
  });
});

navItem.forEach((item, index) => {
  item.addEventListener('click', function () {
    item.classList.add('active');
    clear(dropdownMenu);
    dropdownMenu[index].classList.toggle('active');
    updateItem(navItem, index);
    overlay.classList.add('active');
  });
});

overlay.addEventListener('click', function () {
  overlay.classList.remove('active');
  clear(dropdownMenu);
  clear(navItem);
});
