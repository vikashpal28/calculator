document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('button');
    let currentInput = '';
    let operator = null;
    let previousInput = '';
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const value = button.textContent;
  
        if (!isNaN(value) || value === '.') {
          currentInput += value;
          display.textContent = currentInput;
        } else if (value === 'AC') {
          currentInput = '';
          previousInput = '';
          operator = null;
          display.textContent = '';
        } else if (value === 'x') {
          currentInput = currentInput.slice(0, -1);
          display.textContent = currentInput;
        } else if (value === '%') {
          currentInput = (parseFloat(currentInput) / 100).toString();
          display.textContent = currentInput;
        } else if (value === '=') {
          if (operator && previousInput !== '' && currentInput !== '') {
            currentInput = eval(previousInput + operator + currentInput).toString();
            display.textContent = currentInput;
            previousInput = '';
            operator = null;
          }
        } else {
          if (currentInput !== '') {
            if (previousInput === '') {
              previousInput = currentInput;
              currentInput = '';
            } else {
              previousInput = eval(previousInput + operator + currentInput).toString();
              display.textContent = previousInput;
              currentInput = '';
            }
          }
          operator = value;
        }
      });
    });
  });
  