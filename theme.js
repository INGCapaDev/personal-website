window.addEventListener('DOMContentLoaded', (event) => {
  let btn = document.querySelector('.toggle');
  let icon = document.querySelector('.toggle i');
  let body = document.querySelector('.hero.header');

  btn.onclick = () => {
    body.classList.toggle('light-theme');
  };
});
