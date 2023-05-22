window.addEventListener('DOMContentLoaded', (event) => {
  let btn = document.querySelector('.toggle');
  let icon = document.querySelector('.toggle i');
  let hero = document.querySelector('.hero-header');
  let html = document.querySelector('html');

  btn.onclick = () => {
    hero.classList.toggle('light-theme');
    html.classList.toggle('light-theme');
    if (hero.classList.contains('light-theme')) {
      icon.classList.add('fa-moon');
      icon.classList.remove('fa-sun');
      return;
    }
    icon.classList.add('fa-sun');
    icon.classList.remove('fa-moon');
  };
  console.log('hola');
});
