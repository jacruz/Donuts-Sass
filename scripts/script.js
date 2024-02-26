const menuToggle = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
});