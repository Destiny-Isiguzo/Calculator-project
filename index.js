// DARK/LIGHT MODE TOGGLE - ANIMATION

const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.querySelector('body');

// keeps track of the current state of the local storage
const theme = localStorage.getItem('theme');

// on page load, it checks if the local storage isn't empty and gives the body the dark mode class
if (theme) {
    body.classList.add('dark-mode');
}

// themeToggleBtn.addEventListener('click', () => {
//     themeToggleBtn.classList.toggle('rotate');
// })


themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.style.transition = '0.8s';

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    }else {
        localStorage.removeItem('theme');
    }
})



// FUNCTIONALITY

const display = document.querySelector('[data-output]');
const allBtn = Array.from(document.getElementsByClassName('calculator__key'));
// const numberButton = document.querySelectorAll('[data-number]');
// const operationButton = document.querySelectorAll('[data-operator]');
// const deleteButton = document.querySelector('[data-delete]');
// const equalButton = document.querySelector('[data-equal]');
// const resetButton = document.querySelector('[data-reset]');
// const previousOperandTextElement = document.querySelector('[data-previous-operand]');
// const currentOperandTextElement = document.querySelector('[data-current-operand]');

let operator = '';

let currentValue = [];

allBtn.map((button) => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;

        switch (buttonText) {
            case 'RESET':
                display.innerText = '';
                currentValue = [];
                operator = '';
                break;
                //addition
            case '+':
                display.innerText = currentValue.join('').trim() + '+';
                currentValue.push('+');
                operator = '+';
                break;
            case 'DEL':
                display.innerText = display.innerText.slice(0, -1);
                currentValue.pop();
                break;
                // multiplication case
            case 'x' :
                display.innerText = currentValue.join('').trim() + '*';
                currentValue.push('*');
                operator = '*';
                break; 
            case '-' :
                display.innerText = currentValue.join('').trim() + '-';
                currentValue.push('-');
                operator = '-';
                break;
            case '=':
                // currentValue.push(display.innerText);
                let result = eval(currentValue.join(''));
                display.innerText = result;
                currentValue = [];
                operator = '';
                break;
            case '.':
                const arr = [...currentValue];
                const lastEl = arr.pop();
                if (lastEl !== '.') {
                    display.innerText = currentValue.join('') + '.';
                    currentValue.push('.');
                } 
                break;
            default:
                display.innerText = currentValue.join('') + buttonText;
                currentValue.push(buttonText);
                break;
        }
    })
})

// // storing current values and operations being used in a class

// class Calculator {
//     // placing display text for calculator

//     constructor(previousOperandTextElement, currentOperandTextElement) {
//         // setting the elements in our calc class

//         this.previousOperandTextElement = previousOperandTextElement;
//         this.currentOperandTextElement = currentOperandTextElement;

//         // setting to default value a soon new calculator is created
//         this.clear();
//     }

//     clear() {

//         // default to empty str if cleared
//         this.currentOperand = '';
//         this.previousOperand = '';

//         // stay undefined as there are not operations selected 
//         this.operation = undefined;
//     }

//     delete() {
//         // get the current operand and convert it to a String. using the slice we get the last value 
//         // and take it out starting from the index[0] all the way to the second to last index[-1] from the end
//         this.currentOperand = this.currentOperand.toString().slice(0, -1);
//     }

//     //  adds user input/number passed to the screen/display. convert to str incase a it's a num
//     //  we convert everything to a string cause js will try to add as number, but we want it appended not added
//     appendNumber(number) {
//         // run a check for existing decimals to avoid appending multiple decimals, else exit function
//         if (number === '.' && this.currentOperand.includes('.')) return;

//         this.currentOperand = this.currentOperand.toString() + number.toString();
//     }

//     // users choice of operations on calculator
//     chooseOperation(operation) {
//         // checks to avoid running operations if there aren't any values to operate on
//         if (this.currentOperand === '') return;

//         // checks to see if there are values on the screen to be calculated/computed on, and calculates them
//         if (this.previousOperand !== '') {
//             this.compute();
//         }

//         this.operation = operation;

//         // setting the previous operand to the current, recycling whatever is in the current to the previous and clearing the current
//         // operand display
//         this.previousOperand = this.currentOperand;

//         // clear out the new current operand to be typed into
//         this.currentOperand = '';
//     }

//     // computes/calculates a single value to be displayed on screen
//     compute() {
//         // results of the computation function 
//         let computation;

//         // converts the string to a number
//         const previous = parseFloat(this.previousOperand);
//         const current = parseFloat(this.currentOperand);

//         // checks to avoid computation on an empty/not a number display and exits the function
//         if (isNaN(previous) || isNaN(current)) return;

//         switch (this.operation) {
//             case '+':
//                 computation = previous + current;
//                 break;

//             case '-':
//                 computation = previous - current;
//                 break;

//             case '/':
//                 computation = previous / current;
//                 break;

//             case 'x':
//                 computation = previous * current;
//                 break;

//             default:
//                 return;
//         }
//         // update the current operand to the result of the computation
//         this.currentOperand = computation;
//         this.operation = undefined;
//         this.previousOperand = '';
//     }

//     // update values of current operand and previous to the display screen constantly
//     updateDisplay() {
//         this.currentOperandTextElement.innerText = this.currentOperand;

//         // checks if the operation isn't equal to null, display the previous operand text element
//         // and concatenate the operator using template literals to the end of the previous operand
//         if (this.operation != null) {
//             this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
//             // clear out the previous operand and display the computed result on the current screen
//         }else {
//             this.previousOperandTextElement.innerText = ''; 
//         }
//     }
// }
 
// // selecting the respective elements to manipulate

// const numberButton = document.querySelectorAll('[data-number]');
// const operationButton = document.querySelectorAll('[data-operator]');
// const deleteButton = document.querySelector('[data-delete]');
// const equalButton = document.querySelector('[data-equal]');
// const resetButton = document.querySelector('[data-reset]');
// const previousOperandTextElement = document.querySelector('[data-previous-operand]');
// const currentOperandTextElement = document.querySelector('[data-current-operand]');

// // create new calculator class
// const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

// // loop through all the buttons and add an event listener for the append function
// numberButton.forEach(button =>  {
//     button.addEventListener('click', () => {
//         // append number of whatever is in the button
//         calculator.appendNumber(button.innerText);
//         // update the display constantly
//         calculator.updateDisplay();
//     })
// })

// // loop through all the buttons and add an event listener for the operation function
// operationButton.forEach(button => {
//     button.addEventListener('click', () => {
//         // pass the text of whatever operation is chosen 
//         calculator.chooseOperation(button.innerText);
//         calculator.updateDisplay();
//     })
// })

// equalButton.addEventListener('click', button => {
//     calculator.compute();
//     calculator.updateDisplay();
// }) 

// resetButton.addEventListener('click', button => {
//     calculator.clear();
//     calculator.updateDisplay();
// }) 

// deleteButton.addEventListener('click', button => {
//     calculator.delete();
//     calculator.updateDisplay();
// }) 