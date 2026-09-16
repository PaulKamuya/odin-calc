const display = document.querySelector('#display')

let firstNum = '' 
let operator = ''
let secondNum = ''


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

    case '÷':
      divide(prevNum,currNum)
    break;
  }
}