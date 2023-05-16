const btnMenu = document.querySelector('.btn-menu')

const body = document.documentElement
const buttonMoon = document.querySelector('.theme-dark-button')
const buttonSun = document.querySelector('.theme-light-button')



function toggleMenu() {
  const btnOpen = document.querySelector('.btn-open')
  const btnClose = document.querySelector('.btn-close')
  const nav = document.querySelector('nav')
  nav.classList.toggle('active')
  btnOpen.classList.toggle('hidden')
  btnClose.classList.toggle('hidden')

}

function toggleTheme() {
  body.classList.toggle('light')
  buttonMoon.classList.toggle('hidden')
  buttonSun.classList.toggle('hidden')
}


btnMenu.addEventListener('click', toggleMenu)
buttonMoon.addEventListener('click', toggleTheme)
buttonSun.addEventListener('click', toggleTheme)