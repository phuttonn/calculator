const add = (a,b) => {
    return (a) + (b);
}

const subtract = (a,b) => {
    return a - b;
}

const mult = (a,b) => {
    return a * b;
}

const divide = (a,b) => {
   return a / b;
}

const operate = (operator, num1, num2) => {
  num1 = Number(num1);
  num2 = Number(num2);
  if(num2 === 0) {
    alert("Cant divide by zero!")
    return 0;
  } else {
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
      };
    };
    return value;
  };

let num1 = '';
let num2 = '';
let operator = null;

const screen = document.querySelector('#screen');
const numButtons = document.querySelectorAll(".num-button");
const buttons = document.querySelectorAll('.num-button, .operator-button');
const allClear = document.querySelector('.all-clear');
const clear = document.querySelector('.clear');
const operatorButton = document.querySelectorAll('.operator-button');
const calculate = document.querySelector('.equal-button');

const workingScreen = document.querySelector('#working-screen');
const currentScreen = document.querySelector('#current-screen');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let val = button.innerText;
    workingScreen.append(`${val}`)
  });
});

 numButtons.forEach((button) => {
    button.addEventListener('click', () => {
      let val = button.innerText;
      currentScreen.append(`${val}`);
    });
  });

  allClear.addEventListener('click', () => {
    currentScreen.innerText = '';
    workingScreen.innerText = '';
  });
  
  clear.addEventListener('click', () => {
    currentScreen.textContent = currentScreen.textContent.substring(0, currentScreen.textContent.length - 1);
  workingScreen.textContent = workingScreen.textContent.substring(0, workingScreen.textContent.length - 1);
  });

operatorButton.forEach((button) => {
  button.addEventListener('click', () => {
  num1 = currentScreen.innerText;
  operator = button.id;
  return currentScreen.innerText = '';
  });
});

calculate.addEventListener('click', () => {
  let num2 = currentScreen.innerText;
  let val = operate(operator,num1,num2);
  currentScreen.innerText = ('');
  currentScreen.append(`${val}`);
});