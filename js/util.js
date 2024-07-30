const mobile = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--mobile'))
const duration = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--transition-d'))


function debounce(func, ms = 250) {
  let timeout;
  return function() {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, arguments), ms)
  }
}

export {mobile, duration, debounce}
