function functionalCalculator(numberOne, numberTwo, operator) {
    switch (operator) {
        case '+':
            console.log(numberOne + numberTwo)
            break;
        case '-':
            console.log(numberOne - numberTwo)
            break;
        case '/':
            console.log(numberOne / numberTwo)
            break;
        case '*':
            console.log(numberOne * numberTwo)
            break;
    }
}

functionalCalculator(2, 4, '+') //6
