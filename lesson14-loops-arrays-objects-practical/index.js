// let shoppingCart = [
//     {
//         name: "loaf of bread",
//         type: "food",
//         quantity: 1,
//         price: .85
//     },
//     {
//         name: "multipack beans",
//         type: "food",
//         quantity: 2,
//         price: 1
//     },
//     {
//         name: "mushrooms",
//         type: "food",
//         quantity: 10,
//         price: .1
//     },
//     {
//         name: "can of beer",
//         type: "alcohol",
//         quantity: 4,
//         price: 1.1
//     },
//     {
//         name: "prosecco",
//         type: "alcohol",
//         quantity: 1,
//         price: 8.99
//     },
//     {
//         name: "steak",
//         type: "food",
//         quantity: 2,
//         price: 3.99
//     },
//     {
//         name: "blue cheese",
//         type: "food",
//         quantity: 1,
//         price: 2.99
//     },
//     {
//         name: "candles",
//         type: "home",
//         quantity: 3,
//         price: 1.99
//     },
//     {
//         name: "cheesecake",
//         type: "food",
//         quantity: 1,
//         price: 4.99
//     },
//     {
//         name: "onions",
//         type: "food",
//         quantity: 3,
//         price: .4
//     },
// ];

// function shoppingTotal(cart) {
//     let totalPrice = 0;
//     for (let i = 0; i < cart.length; i++) {
//         let itemPrice = cart[i].price;
//         if (cart[i].type === 'food') {
//             itemPrice = itemPrice * 0.8
//         }
//         let itemQuantity = cart[i].quantity

//         let itemTotalPrice = itemPrice * itemQuantity
//         totalPrice += itemTotalPrice;
//     }

//     return totalPrice.toFixed(2);
// }

// // console.log(`£${shoppingTotal(shoppingCart)}`)

// function shoppingTotalBetter(cart, discountAmount, type) {
//     let totalPrice = 0;
//     for (let i = 0; i < cart.length; i++) {
//         let itemPrice = cart[i].price;

//         if (cart[i].type === type) {
//             itemPrice = (100 - discountAmount) / 100 * itemPrice;
//         }

//         let itemQuantity = cart[i].quantity;
//         let itemTotalPrice = itemPrice * itemQuantity;
//         totalPrice += itemTotalPrice;
//     }

//     return totalPrice.toFixed(2);
// }

// console.log(shoppingTotalBetter(shoppingCart, 20, 'home'))

// function shoppingCartPriceRanget(cart, lowPrice, highPrice, quantity) {
//     let arrItems = [];
//     for (let i = 0; i < cart.length; i++) {
//         if (quantity === true) {
//             let itemPrice = cart[i].price * cart[i].quantity;
//             if (itemPrice >= lowPrice && itemPrice <= highPrice) {
//                 arrItems.push(cart[i])
//             }

//         }

//     }
//     return arrItems
// }

// console.log(shoppingCartPriceRange(shoppingCart, 2, 5))

//Task 4
// Create an array of numbers and write functions that can return the mean, mode, median.
// numbers = [3, 78, 5, 23, 1, 9, 7, 5];
numbers = [7, 7, 2, 2, 3, 4, 5]

function mean(numbers) {
    total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total / numbers.length;
}

function mode(numbers) {
    var numberCounts = {};
    for (var i = 0; i < numbers.length; i++) {
        var keyName = numbers[i].toString(); // obj keys need to be strings

        // if numberCounts already has a key of numbers[i]
        if (numberCounts.hasOwnProperty(keyName)) {
            numberCounts[keyName] += 1;
        }
        // else create the key numbers[i] and set it to 1
        else {
            numberCounts[keyName] = 1;
        }
    }

    numberCountsArray = [];
    for (var key in numberCounts) {
        numberCountsArray.push([key, numberCounts[key]]);
    }

    numberCountsArray.sort(function (a, b) {
        return a[1] - b[1];
    })
    numberCountsArray.reverse()

    var firstMode = parseInt(numberCountsArray[0][0]);
    var firstModeCount = parseInt(numberCountsArray[0][1]);
    var results = [firstMode];

    if (numberCountsArray[1][1] != firstModeCount) { // there's only one mode
        return [results];
    }

    else {  // there are at least two equal modes
        for (i = 1; i < numberCountsArray.length; i++) {
            thisNumberCount = parseInt(numberCountsArray[i][1]);
            if (thisNumberCount == firstModeCount) {
                results.push(parseInt(numberCountsArray[i]));

            }
        }
    }
    results.sort(function (a, b) {
        return a[1] - b[1]
    })
    results.reverse()
    console.log(results)
    return results
}

function median(numbers) {
    // Sort the array
    numbers.sort(function (a, b) { return a - b });

    // If numbers.length is odd, return the middle value: numbers[floor(length / 2)]
    if (numbers.length % 2 != 0) {
        return numbers[Math.floor(numbers.length / 2)];

    }

    /* If numbers.length is even, return the average of the two middle values
    numbers[number.length / 2] and numbers([numbers.length / 2) - 1]
    */
    else {
        var midpoint = numbers.length / 2;
        return (numbers[midpoint] + numbers[midpoint - 1]) / 2
    }
}



console.log(`mean: ${mean(numbers)}`);
console.log(`median: ${median(numbers)}`);

results = mode(numbers)
console.log(`mode: ${results}`)