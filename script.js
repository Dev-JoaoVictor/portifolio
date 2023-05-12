const btnMenu = document.querySelector('.btn-menu')


function toggleMenu() {
  const btnOpen = document.querySelector('.btn-open')
  const btnClose = document.querySelector('.btn-close')
  const nav = document.querySelector('nav')
  nav.classList.toggle('active')
  btnOpen.classList.toggle('hidden')
  btnClose.classList.toggle('hidden')

}


btnMenu.addEventListener('click', toggleMenu)