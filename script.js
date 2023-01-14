const add = (a,b) => {
    return a + b;
}

const subtract = (a,b) => {
    return a - b;
}

const mult = (a,b) => {
    return a * b;
}

const divide = (a,b) => {
    if(b === 0) {
      return alert("Cant divide by zero!")
    } else return a / b;
}

const operate = (operator, num1, num2) => {
    switch (operator) {
      case '+':
       value = add(num1, num2);
        break;
      case '-':
         value = subtract(num1, num2);
        break;
      case '*':
       value = mult(num1, num2);
        break;
      case '/':
        value = divide(num1, num2);
        break;
      default:
        throw new Error(`Invalid operator: ${operator}`); 
    }
    return value;
  };

const screen = document.querySelector('#screen');
const numButtons = document.querySelectorAll(".num-button");
const allClear = document.querySelector('.all-clear');
const clear = document.querySelector('.clear');
const operatorButton = document.querySelectorAll('.operator-button');
const calculate = document.querySelector('.equal-button');

 numButtons.forEach((button) => {
    button.addEventListener('click', () => {
      let val = button.innerText;
    screen.append(`${val}`);
    })
  });

  allClear.addEventListener('click', () => {
    screen.innerText = ('');
  });
  
  clear.addEventListener('click', () => {
    screenArray = screen.innerText.split('');
    let newArray = screenArray.slice(0,-1).join('');
    screen.innerText =(newArray);
  });

var calc;
operatorButton.forEach((button) => {
  button.addEventListener('click', () => {
  let numOne = screen.innerText;
  let operator = button.id;
  calc = [numOne,operator];
  screen.innerText = '';
  return(calc);
  });
});

calculate.addEventListener('click', () => {
  var num1 = calc[0];
var operator = calc[1];
  let num2 = screen.innerText;
  let val = operate(operator,num1,num2);
  screen.innerText = ('');
  screen.append(`${val}`);
});