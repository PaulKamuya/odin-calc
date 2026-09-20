const display = document.querySelector('#display')
const btn = document.querySelectorAll('.btn')
const operatorsBtn = document.querySelectorAll('[id]')

let firstNum = ''
let secNum = ''
let symbol = ''
let ans; 



function  addNums(a, b){
  return a + b
}

function  minus(a, b){
  return a - b
}

function  multiply(a, b){
  console.log(a * b)
  return a * b
}

function  divide(a, b){
  return (a === 0 || b === 0) ? 'Syntax Error' : a / b
}

function operate(a, operator, b){

  a = +firstNum
  b = +secNum
  operator = symbol

  switch(operator){
    case '+':
      updateDisplay(addNums(a, b))
    break;
    
    case '-':
      updateDisplay(minus(a, b))
    break;

    case 'x':
      updateDisplay(multiply(a, b))
    break;

    case '÷':
      updateDisplay(divide(a, b))
    break;
  }
  resetVaribles()
}

function updateDisplay(value){
  if (value || value === 0){
    display.value = value
  } else {
    display.value = `${firstNum}${symbol}${secNum}`
  }
}

btn.forEach(button => {
  button.addEventListener('click', () => {
    if (display.value === '' && button.textContent === '.'){
      firstNum = '0'
    }
    if (!symbol && !firstNum){
      firstNum += button.textContent

    } else {
      secNum += button.textContent
    }
    updateDisplay()
  })
})

operatorsBtn.forEach(operator => {
  operator.addEventListener('click', () => {
    if (operator.id === 'del-btn'){
      resetVaribles()

    } else {
      if (!symbol) {
        symbol += operator.textContent
      }
    }
    updateDisplay()

    if (operator.id === 'equal-btn'){
      if (!display.value || !symbol || !secNum){ 
        resetVaribles() 
      } else {
        operate(firstNum, symbol, secNum)
      }
    }
  })
})

function resetVaribles(){
  firstNum = ''
  secNum = ''
  symbol = ''
}