// // Task 1
// // Percentage calculator

// function calculatePercentage(percentage, startNumber) {
//     var result = percentage * (startNumber / 100);
//     return result;
// }

// // tests
// console.log(calculatePercentage(5, 20));
// // ------------------------------------------------

// // Task 2 
// // Switch statements

// function drinkOrder(size, drink) {
//     switch (drink) {
//         case 'cola':
//             return outputDrinksOrder(size, 'cola')
//             break;
//         case 'lemon':
//             return outputDrinksOrder(size, 'lemon')
//             break;

//         case 'orange':
//             return outputDrinksOrder(size, 'orange')
//             break;
//     }
// }

// function outputDrinksOrder(size, drink) {
//     switch (size) {
//         case 'small':
//             return 'You have ordered a small of ' + drink
//             break;

//         case 'medium':
//             return 'You have ordered a medium of ' + drink
//             break;

//         case 'large':
//             return 'You have ordered a large of ' + drink
//             break;
//     }

// }

// // tests
// console.log(drinkOrder('small', 'cola'))
// console.log(drinkOrder('medium', 'orange'))
// console.log(drinkOrder('large', 'lemon'))

// console.log(
//     outputDrinksOrder('small', 'lemon')
// )
// // ------------------------------------------------

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


