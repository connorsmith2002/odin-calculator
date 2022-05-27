let buttons = document.querySelectorAll('button');
let num = document.querySelector('#num');
let operatorSelected = false;
let firstValue = 0;
let currentOperator = '';
let onesPlace = true;
let total = 0;
let total2 = 0;
let chaining = 0;

buttons.forEach((button) => {
    if (button.value == '1') {
        button.addEventListener('click', (event) => {
            if (onesPlace) {
                firstValue = 1;
            } else {
                firstValue = firstValue * 10 + 1;
            }
            if (operatorSelected) {
                total2 = firstValue;
            }
            num.textContent = firstValue.toString();
            onesPlace = false;
        });
    } else if (button.value == '2') {
        button.addEventListener('click', (event) => {
            if (onesPlace) {
                firstValue = 2;
            } else {
                firstValue = firstValue * 10 + 2;
            }
            if (operatorSelected) {
                total2 = firstValue;
            }
            num.textContent = firstValue.toString();
            onesPlace = false;
        });
    } else if (button.value == '3') {
        button.addEventListener('click', (event) => {
            if (onesPlace) {
                firstValue = 3;
            } else {
                firstValue = firstValue * 10 + 3;
            }
            if (operatorSelected) {
                total2 = firstValue;
            }
            num.textContent = firstValue.toString();
            onesPlace = false;
        });
    } else if (button.value == '4') {
        button.addEventListener('click', (event) => {
            if (onesPlace) {
                firstValue = 4;
            } else {
                firstValue = firstValue * 10 + 4;
            }
            if (operatorSelected) {
                total2 = firstValue;
            }
            num.textContent = firstValue.toString();
            onesPlace = false;
        });
    } else if (button.value == '5') {
        button.addEventListener('click', (event) => {
            if (onesPlace) {
                firstValue = 5;
            } else {
                firstValue = firstValue * 10 + 5;
            }
            if (operatorSelected) {
                total2 = firstValue;
            }
            num.textContent = firstValue.toString();
            onesPlace = false;
        });
    } else if (button.value == '6') {
        button.addEventListener('click', (event) => {
            if (onesPlace) {
                firstValue = 6;
            } else {
                firstValue = firstValue * 10 + 6;
            }
            if (operatorSelected) {
                total2 = firstValue;
            }
            num.textContent = firstValue.toString();
            onesPlace = false;
        });
    } else if (button.value == '7') {
        button.addEventListener('click', (event) => {
            if (onesPlace) {
                firstValue = 7;
            } else {
                firstValue = firstValue * 10 + 7;
            }
            if (operatorSelected) {
                total2 = firstValue;
            }
            num.textContent = firstValue.toString();
            onesPlace = false;
        });
    } else if (button.value == '8') {
        button.addEventListener('click', (event) => {
            if (onesPlace) {
                firstValue = 8;
            } else {
                firstValue = firstValue * 10 + 8;
            }
            if (operatorSelected) {
                total2 = firstValue;
            }
            num.textContent = firstValue.toString();
            onesPlace = false;
        });
    } else if (button.value == '9') {
        button.addEventListener('click', (event) => {
            if (onesPlace) {
                firstValue = 9;
            } else {
                firstValue = firstValue * 10 + 9;
            }
            if (operatorSelected) {
                total2 = firstValue;
            }
            num.textContent = firstValue.toString();
            onesPlace = false;
        });
    } else if (button.value == '0') {
        button.addEventListener('click', (event) => {
            if (onesPlace) {
                firstValue = 0;
            } else {
                firstValue = firstValue * 10;
            }
            if (operatorSelected) {
                total2 = firstValue;
            }
            num.textContent = firstValue.toString();
        });
    } else if (button.value == '-1') {
        button.addEventListener('click', (event) => {
            firstValue = firstValue * -1;
            num.textContent = firstValue.toString();
        });
    }
});
const operators = document.querySelectorAll('.button-operator');

operators.forEach((operator) => {
    let dataKey = operator.getAttribute('data-key');
    operator.addEventListener('click', (event) => {
        if (chaining) {
            if (dataKey == '1') {
                // Plus Sign
                compute(total, total2, currentOperator);
                operatorSelected = true;
                onesPlace = true;
                currentOperator = '+';
            } else if (dataKey == '2') {
                // Minus Sign
                compute(total, total2, currentOperator);
                operatorSelected = true;
                onesPlace = true;
                currentOperator = '-';
            } else if (dataKey == '3') {
                // Multiplication
                compute(total, total2, currentOperator);
                operatorSelected = true;
                onesPlace = true;
                currentOperator = 'x';
            } else {
                // Division
                compute(total, total2, currentOperator);
                operatorSelected = true;
                onesPlace = true;
                currentOperator = '/';
            }
            total = firstValue;
            chaining++;
        } else {
            if (dataKey == '1') {
                // Plus Sign
                operatorSelected = true;
                onesPlace = true;
                currentOperator = '+';
            } else if (dataKey == '2') {
                // Minus Sign
                operatorSelected = true;
                onesPlace = true;
                currentOperator = '-';
            } else if (dataKey == '3') {
                // Multiplication
                operatorSelected = true;
                onesPlace = true;
                currentOperator = 'x';
            } else {
                // Division
                operatorSelected = true;
                onesPlace = true;
                currentOperator = '/';
            }
        }
        total = firstValue;
        chaining++;
    });
});

function compute(lastValue, currentValue, currentOperator) {
    if (currentOperator == '+') {
        firstValue = lastValue + currentValue;
        num.textContent = firstValue.toString();
    } else if (currentOperator == '-') {
        firstValue = lastValue - currentValue;
        num.textContent = firstValue.toString();
    } else if (currentOperator == 'x') {
        firstValue = lastValue * currentValue;
        num.textContent = firstValue.toString();
    } else if (currentOperator == '/') {
        firstValue = lastValue / currentValue;
        num.textContent = firstValue.toString();
    }
}

let clearBtn = document.querySelector('#button-clear');

clearBtn.addEventListener('click', (event) => {
    firstValue = 0;
    operatorSelected = false;
    currentOperator = '';
    num.textContent = '0';
    chaining = 0;
});

let equalsBtn = document.querySelector('#button-equals');

equalsBtn.addEventListener('click', (event) => {
    compute(total, total2, currentOperator);
    operatorSelected = false;
    onesPlace = true;
    chaining = 0;
});
