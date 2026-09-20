const display = document.querySelector('#display')
const btn = document.querySelectorAll('.btn')
const operatorsBtn = document.querySelectorAll('[id]')

operatorsBtn.forEach(operator => {
  operator.addEventListener('click', () => {
    if (operator.id === 'equal-btn'){
      console.log('equals')
    } else if (operator.id === 'del-btn'){
      console.log('delete/clear')
    } else {
      console.log(operator.textContent)
    }
  })
})
