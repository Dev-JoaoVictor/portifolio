const btnMenu = document.querySelector('.btn-menu')

function toggleMenu() {
  const nav = document.querySelector('nav')
  nav.classList.toggle('active')
}


btnMenu.addEventListener('click', toggleMenu)