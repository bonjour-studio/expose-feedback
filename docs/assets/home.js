const menu = document.querySelector('.nav-menu');

menu.addEventListener('click', (event) => {
  if (event.target.closest('a')) menu.open = false;
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.open) {
    menu.open = false;
    menu.querySelector('summary').focus();
  }
});
