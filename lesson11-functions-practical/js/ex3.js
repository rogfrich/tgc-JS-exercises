// Task 3
//Calculator

function calc(num1, num2, operator) {
    switch (operator) {
        case '+':
            var result = num1 + num2
            return `${num1} ${operator} ${num2} = ${result}`
            break;
        case '-':
            var result = num1 - num2
            return `${num1} ${operator} ${num2} = ${result}`
            break;
        case '*':
            var result = num1 * num2
            return `${num1} ${operator} ${num2} = ${result}`
            break;
        case '/':
            var result = num1 / num2
            return `${num1} ${operator} ${num2} = ${result}`
            break;
        case '%':
            var result = num1 % num2
            return `${num1} ${operator} ${num2} = ${result}`
            break;
    }
}

// tests
console.log(calc(2, 3, '+'))
console.log(calc(10, 5, '-'))
console.log(calc(10, 2, '*'))
console.log(calc(100, 20, '/'))
console.log(calc(8, 3, '%'))
