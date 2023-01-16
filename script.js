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
        if(num2 === 0) {
          alert("Cant divide by zero!")
          return 0;
        } else {
        value = divide(num1, num2)};
        break;
      default:
        value = '';
        break;
    };
    return value;
  };

let num1 = '';
let num2 = '';
let operator = null;
let calculatedVal = '';

const screen = document.querySelector('#screen');
const numButtons = document.querySelectorAll(".num-button");

const allClear = document.querySelector('.all-clear');
const clear = document.querySelector('.clear');
const operatorButton = document.querySelectorAll('.operator-button');
const calculate = document.querySelector('.equal-button');

const workingScreen = document.querySelector('#working-screen');
const currentScreen = document.querySelector('#current-screen');

function reset() {
  currentScreen.innerText = '';
    workingScreen.innerText = '';
    operator = null;
    calculatedVal = '';
}

// number buttons populate current screen

 numButtons.forEach((button) => {
    button.addEventListener('click', () => {
     // if(calculatedVal === ''){
        let val = button.innerText;
        currentScreen.append(`${val}`);
        workingScreen.append(`${val}`);
 //   } else {
 //     reset();
 //     val = button.innerText;
 //     currentScreen.append(`${val}`);
 //   }
    });
  });

  allClear.addEventListener('click', reset);
  
  clear.addEventListener('click', () => {
    currentScreen.textContent = currentScreen.textContent.substring(0, currentScreen.textContent.length - 1);
  workingScreen.textContent = workingScreen.textContent.substring(0, workingScreen.textContent.length - 1);
  });

operatorButton.forEach((button) => {
  button.addEventListener('click', () => {
    let val = button.innerText;
      workingScreen.append(`${val}`);
      
  if(calculatedVal !== ''){
    operator = button.id;
    currentScreen.innerText = '';
    workingScreen.innerText = (`${calculatedVal}${operator}`);
    num1 = calculatedVal;
  } else if(operator !== null) {
      calc();
      operator = null;
    } else {
  num1 = currentScreen.innerText;
  operator = button.id;
  return currentScreen.innerText = '';
    };
  });
});

 function calc() {
  if(num1 !== '' || num2 !== '' || operator !== null){
    num2 = currentScreen.innerText;
    calculatedVal = operate(operator,num1,num2);
    currentScreen.innerText = ('');
    currentScreen.append(`${calculatedVal}`);
  } else {
    return
  };
}
calculate.addEventListener('click', calc);
