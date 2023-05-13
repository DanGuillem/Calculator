


function add(a, b) {
    return(a + b);
};

function subtract(a, b) {
    return(a - b);
};

function multiply(a, b) {
    return (a * b);
};

function divide(a, b) {
    return (a / b);
};

function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    }
    else if (operator === "-") {
        return subtract(a, b);
    }
    else if (operator === "x") {
        return multiply(a, b);
    }
    else if (operator === "%") {
        return divide(a, b);
    }
}


const display = document.querySelector('#display');
const secondDisplay = document.querySelector('#seconddisplay');

display.textContent = 0;

function clearDisplay() {
    display.textContent = "";
}

let firstNum = 0;
let secondNum = 0;
let inputOperand = [];

result = 0;


const numberButtons = document.querySelector('#numbercontainer');
const buttons = numberButtons.querySelectorAll('button');

console.log(buttons)

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        if (display.textContent == 0) {
            clearDisplay();
            display.textContent += button.id;
        } else display.textContent += button.id; 
    }); 
});

const operandButtons = document.querySelector('.operands');
const opButtons = operandButtons.querySelectorAll('button');

opButtons.forEach((button) => {

    button.addEventListener('click', () => {
        firstNum += parseInt(display.textContent);
        inputOperand += button.id;
        secondDisplay.textContent = display.textContent += (" " + button.id + " ");
        display.textContent = 0;
    })
})

const clearButton = document.querySelector('#clear');

clearButton.addEventListener('click', () => {
    display.textContent = 0;
    secondDisplay.textContent = "";
    firstNum = [];
    inputOperand = [];
})

const equalButton = document.querySelector('#equals');

equalButton.addEventListener('click', () => {
    secondNum = parseInt(display.textContent);
    result = operate(inputOperand, firstNum, secondNum);
    secondDisplay.textContent = "";
    display.textContent = result;
})