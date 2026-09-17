const display = document.querySelector('#display')
const btn = document.querySelectorAll('.btn')
const operatorsBtn = document.querySelectorAll('[id]')

operatorsBtn.forEach(operator => {
  operator.addEventListener('click', () => {
    console.log(operator.id)
  })
})