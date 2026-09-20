const display = document.querySelector('#display')
const btn = document.querySelectorAll('.btn')
const operatorsBtn = document.querySelectorAll('[id]')

let firstNum = ''
let secNum = ''
let symbol = ''



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
  return (a === 0 || b === 0) ? 'Syntax Error' : a / b
}

function operate(a, operator, b){

  a = +firstNum
  b = +secNum
  operator = symbol
  let ans;

  switch(operator){
    case '+':
      ans = addNums(a, b)
    break;
    
    case '-':
      ans = minus(a, b)
    break;

    case 'x':
      ans = multiply(a, b)
    break;

    case '÷':
      ans = divide(a, b)
    break;
  }
  
  updateDisplay(ans)
  resetVaribles()
  return ans
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
      firstNum += '0'
    }

    if (symbol){
      if (secNum === '' && button.textContent === '.'){
        secNum += '0'
      }
      secNum += button.textContent

    } else {
      firstNum += button.textContent
    }
    updateDisplay()
  })
})

operatorsBtn.forEach(operator => {
  operator.addEventListener('click', () => {

    if (!firstNum) return

    if (operator.id === 'equal-btn'){

      if (!display.value || !symbol || !secNum){ 
        resetVaribles() 
        updateDisplay()
      } else {
        operate(firstNum, symbol, secNum)
      }
      //throw in function ^^

    } else { 

      if (operator.id === 'del-btn'){
        resetVaribles()
        updateDisplay()

      }else {
        if (!symbol){
          symbol += operator.textContent
        } else if (secNum) {
          firstNum = operate(firstNum, symbol,secNum)
          symbol += operator.textContent
        }
        updateDisplay()
      }
    }
  })
})

function resetVaribles(){
  firstNum = ''
  secNum = ''
  symbol = ''
}