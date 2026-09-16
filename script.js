const display = document.querySelector('#display')
const btn = document.querySelector('button')

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

add(5, 6) // 11
sub(10, 9) // 1
multiply(1, 7) // 7
divide (10, 10) // 1