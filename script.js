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
    if(b === 0) {
      return alert("Cant divide by zero!")
    } else return a / b;
}

const operate = (operator, num1, num2) => {
  Number(num1);
  Number(num2);
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

var calc;
operatorButton.forEach((button) => {
  button.addEventListener('click', () => {
  let numOne = currentScreen.innerText;
  let operator = button.id;
  calc = [numOne,operator];
  currentScreen.innerText = '';
  return(calc);
  });
});

calculate.addEventListener('click', () => {
  var num1 = calc[0];
  var operator = calc[1];
  let num2 = currentScreen.innerText;
  let val = operate(operator,num1,num2);
  currentScreen.innerText = ('');
  currentScreen.append(`${val}`);
});