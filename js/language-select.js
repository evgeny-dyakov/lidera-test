const languageSelect = document.querySelector('.header__language-select')
const openButton = document.querySelector('.header__language-select-button')
const languages = document.querySelectorAll('.header__language-select-lenguage')

let current

openButton.addEventListener('click', () => {
  openButton.classList.toggle('header__language-select-button--open')
  languageSelect.classList.toggle('header__language-select--open')
})

languages.forEach(language => {
  if (language.classList.contains('header__language-select-lenguage--current')) {
    current = language
    language.setAttribute('disabled', 'true')
  }

  language.addEventListener('click', () => {
    current.classList.toggle('header__language-select-lenguage--current')
    current.removeAttribute('disabled')

    language.classList.toggle('header__language-select-lenguage--current')
    language.setAttribute('disabled', 'true')
    current = language

    languageSelect.classList.toggle('header__language-select--open')
    openButton.classList.toggle('header__language-select-button--open')
  })
})

document.addEventListener('click', e => {
  if (!e.target.closest('.header__language-select') && languageSelect.classList.contains('header__language-select--open')) {
    languageSelect.classList.toggle('header__language-select--open')
    openButton.classList.toggle('header__language-select-button--open')
  }
})
