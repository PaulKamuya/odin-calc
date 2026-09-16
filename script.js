const display = document.querySelector('#display')
const btn = document.querySelector('button')

let firstNum = '' 
let operator = ''
let secondNum = ''

btn.addEventListener('click', () => {
  display.value += btn.textContent
})

const add = function (a,b) {
  a = +a 
  b = +b

  console.log(a + b)
  return a + b
}

const sub = (a,b) => {
  a = +a
  b = +b

  console.log(a - b)
  return a - b
}

const multiply = (a,b) => {
  a = +a
  b = +b

  console.log(a * b)
  return a * b
}

const divide = (a,b) => {
  a = +a
  b = +b

  console.log(a / b)
  return a / b
}

function operate(prevNum, operator, currNum){

  if (!operator) return 

  prevNum = firstNum
  currNum = secondNum

  switch (operator){
    case '+':
      add(prevNum,currNum)
    break;

    case '-':
      sub(prevNum,currNum)
    break;

    case 'x':
      multiply(prevNum,currNum)
    break;

    case '/':
      divide(prevNum,currNum)
    break;
  }
}

const divideBtn = document.querySelector('#divide-btn')

divideBtn.addEventListener('click', () => {
  console.log(textContent)
})