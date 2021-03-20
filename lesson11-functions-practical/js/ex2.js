// Switch statements

function drinkOrder(size, drink) {
    switch (drink) {
        case 'cola':
            return outputDrinksOrder(size, 'cola')
            break;
        case 'lemon':
            return outputDrinksOrder(size, 'lemon')
            break;

        case 'orange':
            return outputDrinksOrder(size, 'orange')
            break;
    }
}

function outputDrinksOrder(size, drink) {
    switch (size) {
        case 'small':
            return 'You have ordered a small of ' + drink
            break;

        case 'medium':
            return 'You have ordered a medium of ' + drink
            break;

        case 'large':
            return 'You have ordered a large of ' + drink
            break;
    }

}

// tests
console.log(drinkOrder('small', 'cola'))
console.log(drinkOrder('medium', 'orange'))
console.log(drinkOrder('large', 'lemon'))

console.log(
    outputDrinksOrder('small', 'lemon')
)