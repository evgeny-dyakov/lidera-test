import {mobile, duration, debounce} from './util.js'

const header = document.querySelector('.header')
const logo = header.querySelector('.header__logo-left')
const burger = header.querySelector('.header__burger')
const menu = header.querySelector('.header__menu')

const isMobile = () => window.innerWidth <= mobile

burger.addEventListener('click', onBurgerClick)
logo.addEventListener('click', onLogoClick)
window.addEventListener('resize', debounce(onWindowResize))

function onBurgerClick() {
  menu.classList.contains('header__menu--open') ? closeMenu() : openMenu()
}

function openMenu() {
  animateBurger()
  showMenu()
  toggleBodyScroll()
}

function closeMenu() {
  animateBurger()
  hideMenu()
  toggleBodyScroll()
}

function showMenu() {
  menu.classList.toggle('header__menu--flex')
  setTimeout(() => {
    menu.classList.toggle('header__menu--open')
  }, 0)
}

function hideMenu() {
  menu.classList.toggle('header__menu--open')
  setTimeout(() => {
    menu.classList.toggle('header__menu--flex')
  }, duration)
}

function animateBurger() {
  const isBurgerCross = burger.classList.contains('header__burger--cross')
  const isBurgerLines = burger.classList.contains('header__burger--lines')

  if (!isBurgerCross && !isBurgerLines) {
    burger.classList.add('header__burger--cross')
  }

  if (isBurgerCross) {
    burger.classList.remove('header__burger--cross')
    burger.classList.add('header__burger--lines')
  }

  if (isBurgerLines) {
    burger.classList.remove('header__burger--lines')
    burger.classList.add('header__burger--cross')
  }
}

function toggleBodyScroll() {
  document.body.classList.toggle('body--no-scroll')
}

function onLogoClick() {
  if (menu.classList.contains('header__menu--open')) {
    closeMenu()
  }

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}

function onWindowResize() {
  if (!isMobile() && menu.classList.contains('header__menu--open')) {
    closeMenu()
  }
}
