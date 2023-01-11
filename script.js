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

  const buttons = document.querySelectorAll("button");

 buttons.forEach((button) => {
    button.addEventListener('click', () => {
      let val = button.id;
      screen.append(`${val}`);
    })
  });

