const display = document.querySelector('#display')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
  display.value += btn.textContent
})