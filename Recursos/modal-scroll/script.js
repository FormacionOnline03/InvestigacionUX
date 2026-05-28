const modal = document.getElementById('modal');
const close = document.getElementById('close');
let opened = false;

window.addEventListener('scroll', () => {
  if (window.scrollY > 500 && !opened) {
    modal.classList.add('show');
    opened = true;
  }
});

close.addEventListener('click', () => {
  modal.classList.remove('show');
});
