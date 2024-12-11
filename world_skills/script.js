let currentInput = '0';
let previousInput = '';
let operation = null;
let memory = 0;

const resultDisplay = document.getElementById('result');

function updateDisplay() {
  resultDisplay.value = currentInput;
}

function appendNumber(number) {
  if (currentInput === '0') {
    currentInput = number.toString();
  } else {
    currentInput += number.toString();
  }
  updateDisplay();
}

function appendDot() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
  }
  updateDisplay();
}

function clearAll() {
  currentInput = '0';
  previousInput = '';
  operation = null;
  updateDisplay();
}

function clearEntry() {
  currentInput = '0';
  updateDisplay();
}

function backspace() {
  currentInput = currentInput.slice(0, -1) || '0';
  updateDisplay();
}

function toggleSign() {
  currentInput = (parseFloat(currentInput) * -1).toString();
  updateDisplay();
}

function setOperation(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculate();
  }
  operation = op;
  previousInput = currentInput;
  currentInput = '0';
}

function calculate() {
  if (operation === null || currentInput === '') return;
  const current = parseFloat(currentInput);
  const previous = parseFloat(previousInput);

  switch (operation) {
    case '+':
      currentInput = (previous + current).toString();
      break;
    case '-':
      currentInput = (previous - current).toString();
      break;
    case '*':
      currentInput = (previous * current).toString();
      break;
    case '/':
      currentInput = current !== 0 ? (previous / current).toString() : 'Error';
      break;
  }
  operation = null;
  previousInput = '';
  updateDisplay();
}

function sqrt() {
  currentInput = Math.sqrt(parseFloat(currentInput)).toString();
  updateDisplay();
}

function percent() {
  currentInput = (parseFloat(currentInput) / 100).toString();
  updateDisplay();
}

function memoryClear() {
  memory = 0;
}

function memoryRecall() {
  currentInput = memory.toString();
  updateDisplay();
}

function memoryPlus() {
  memory += parseFloat(currentInput);
}

function memoryMinus() {
  memory -= parseFloat(currentInput);
}
