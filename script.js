const display = document.querySelector('#display')
const btn = document.querySelectorAll('.btn')
const operatorsBtn = document.querySelectorAll('[id]')

let firstNum = ''
let secNum = ''
let symbol = ''



function  addNums(a, b){
  console.log(a + b)

  return a + b
}

function  minus(a, b){
  console.log(a - b)

  return a - b
}

function  multiply(a, b){
  console.log(a * b)

  return a * b
}

function  divide(a, b){
  console.log(a / b)

  return a / b
}

function operate(a, operator, b){

  display.value = ''

  a = +firstNum
  b = +secNum
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
  display.value = `${firstNum}${symbol}${secNum}`
}

btn.forEach(button => {
  button.addEventListener('click', () => {
    if (!symbol){
      firstNum += button.textContent
      updateDisplay()

    } else {
      secNum += button.textContent
      updateDisplay()
    }
  })
})

operatorsBtn.forEach(operator => {
  operator.addEventListener('click', () => {
    if (operator.id === 'equal-btn'){
      if (!display.value) console.log('empty')
      if (!symbol) console.log('no symbol')
      if (!secNum) console.log('no second')
      operate(firstNum, symbol, secNum)

    } else if (operator.id === 'del-btn'){
      firstNum = ''
      secNum = ''
      symbol = ''
      updateDisplay()

    } else {
      symbol += operator.textContent
      updateDisplay()
    }
  })
})