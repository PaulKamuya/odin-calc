const display = document.querySelector('#display')
const btn = document.querySelectorAll('.btn')
const operatorsBtn = document.querySelectorAll('[id]')

let firstNum = ''
let secNum = ''
let symbol = ''

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


function  addNums(a, b){
  return a + b
}

function  minus(a, b){
  return a - b
}

function  multiply(a, b){
  return a * b
}

function  divide(a, b){
  return a / b
}

function operate(a, operator, b){
  a = firstNum
  b = secNum
  operator = symbol

  switch(operator){
    case '+':
      addNums(a, b)
    break;
    
    case '-':
      minus(a, b)
    break;

    case '*':
      multiply(a, b)
    break;

    case '÷':
      divide(a, b)
    break;
  }
}

function updateDisplay(){
  display.value = `${firstNum} ${symbol} ${secNum}`
}
