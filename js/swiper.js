import Swiper from '../node_modules/swiper/swiper-bundle.min.mjs'

const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,


  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
