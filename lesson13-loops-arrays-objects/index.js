
// // Task 1
// for (product = 1; product <= 12; product++) {

//     for (var i = 1; i <= 12; i++) {
//         var result = i * product;
//         console.log(`${i} times ${product} = ${result}`)
//     }

// }


// // Task 2
// let myFavouriteFoods = [
//     'Special fried rice',
//     'Salmon',
//     'Stir fry',
//     'Toast'
// ]

// console.log(myFavouriteFoods[1])
// console.log(myFavouriteFoods[3])

// // Task 3
// let myFavouriteFoods = [
//     'Special fried rice',
//     'Salmon',
//     'Stir fry',
//     'Toast'
// ]

// for (i = 0; i < myFavouriteFoods.length; i++) {
//     console.log(myFavouriteFoods[i])
// }

// // Task 4
// let myRecipe = {
//     title: 'Cheese on toast',
//     servings: 2,
//     ingredients: ['bread', 'cheese', 'butter', 'worcestershire sauce'],
//     directions: ['toast the bread', 'grate the cheese onto the bread', 'grill the cheese on toast', 'sprinkle worcestershire sauce']

// };

// document.write('<em>' + myRecipe.title + '</em>' + '<br>');
// document.write(`serves ${myRecipe.servings} <br>`);
// // document.write(myRecipe.ingredients + '<br>');
// document.write('Ingredients<br>')
// for (i = 0; i < myRecipe.ingredients.length; i++) {
//     document.write(myRecipe.ingredients[i] + '<br>')
// }
// document.write('Directions<br>')
// for (i = 0; i < myRecipe.directions.length; i++)
//     document.write(myRecipe.directions[i] + '<br>')

// Task 5
let myRecipe = {
    title: 'Cheese on toast',
    servings: 2,
    ingredients: ['bread', 'cheese', 'butter', 'worcestershire sauce'],
    directions: ['toast the bread', 'grate the cheese onto the bread', 'grill the cheese on toast', 'sprinkle worcestershire sauce'],
    letsCook: function (title) {
        document.write("I am hungry!! Let's cook " + this.title)
    }

};

document.write('<strong>' + myRecipe.title + '</strong>' + '<br>');
document.write(`serves ${myRecipe.servings} <br><br>`);
document.write('<strong>Ingredients</strong><br>')
document.write('<ul>')
for (i = 0; i < myRecipe.ingredients.length; i++) {
    document.write(`<li>${myRecipe.ingredients[i]}</li>`)
}
document.write('</ul>')

document.write('<strong>Directions</strong><br>')
document.write('<ul>')
for (i = 0; i < myRecipe.directions.length; i++) {
    document.write(`<li>${myRecipe.directions[i]}</li>`)
}

document.write('</ul>')

myRecipe.letsCook()