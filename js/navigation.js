import {mobile, debounce} from './util.js'

const nav = document.querySelector('.header__navigation')
const navItems = document.querySelectorAll('.header__navigation-item-button')

const isMobile = () => window.innerWidth <= mobile

let active = null

window.addEventListener('resize', debounce(onWindowResize))

document.addEventListener('click', e => {
  if (!e.target.closest('.header__navigation-list') && active) {
    active.classList.toggle('header__navigation-item-button--active')
    active = null
  }
})

document.addEventListener('DOMContentLoaded', () => {
  if(isMobile()) {
    nav.classList.toggle('header__navigation--mobile-mode')
    navItems.forEach(navItem => {
      addClickHandlers(navItem)
    })
  }
})

function onWindowResize() {
  if(!isMobile() && nav.classList.contains('header__navigation--mobile-mode')) {
    nav.classList.toggle('header__navigation--mobile-mode')
    navItems.forEach(navItem => {
      removeClickHandlers(navItem)
    })

    removeActiveClass()
  }

  if (isMobile() && !nav.classList.contains('header__navigation--mobile-mode')) {
    nav.classList.toggle('header__navigation--mobile-mode')
    navItems.forEach(navItem => {
      addClickHandlers(navItem)
    })
  }
}

function removeActiveClass() {
  if (active) {
    navItems.forEach(navItem => {
      if (navItem.classList.contains('header__navigation-item-button--active')) {
        navItem.classList.remove('header__navigation-item-button--active')
      }
    })

    active = null
  }
}

function removeClickHandlers(navItem) {
  navItem.onclick = null
}

function addClickHandlers(navItem) {
  navItem.onclick = () => {
    if (navItem === active) {
      active = null
      navItem.classList.toggle('header__navigation-item-button--active')

      return
    }

    if (active) {
      active.classList.toggle('header__navigation-item-button--active')
      active = navItem
      navItem.classList.toggle('header__navigation-item-button--active')
    } else {
      active = navItem
      navItem.classList.toggle('header__navigation-item-button--active')
    }
  }
}
