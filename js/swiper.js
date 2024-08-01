const swiper1 = new Swiper('.swiper1', {
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

const swiper2 = new Swiper('.swiper2', {
  direction: 'horizontal',
  loop: false,

  breakpoints: {
    375: {
      slidesPerView: 1.2,
    },
    600: {
      slidesPerView: 2.3,
    },
    900: {
      slidesPerView: 3.3,
    },
    1280: {
      slidesPerView: 4,
    },
  },
})

const swiper3 = new Swiper('.swiper3', {
  direction: 'horizontal',
  loop: true,

  breakpoints: {
    375: {
      slidesPerView: 1.2,
    },
    // 600: {
    //   slidesPerView: 2.3,
    // },
    900: {
      slidesPerView: 2.3,
    },
    1280: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

