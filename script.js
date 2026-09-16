const display = document.querySelector('#display')
const btn = document.querySelector('button')

let firstNumber = ''
let operator = ''
let secondNumber = ''

btn.addEventListener('click', () => {
  display.value += btn.textContent
})

const add = function (a,b) {
  console.log(a + b)
  return a + b
}

const sub = (a,b) => {
  console.log(a - b)
  return a - b
}

const multiply = (a,b) => {
  console.log(a * b)
  return a * b
}

const divide = (a,b) => {
  console.log(a / b)
  return a / b
}

