// Task 4
let myRecipe = {
    title: 'Cheese on toast',
    servings: 2,
    ingredients: ['bread', 'cheese', 'butter', 'worcestershire sauce'],
    directions: ['toast the bread', 'grate the cheese onto the bread', 'grill the cheese on toast', 'sprinkle worcestershire sauce']

};

document.write('<em>' + myRecipe.title + '</em>' + '<br>');
document.write(`serves ${myRecipe.servings} <br>`);
// document.write(myRecipe.ingredients + '<br>');
document.write('Ingredients<br>')
for (i = 0; i < myRecipe.ingredients.length; i++) {
    document.write(myRecipe.ingredients[i] + '<br>')
}
document.write('Directions<br>')
for (i = 0; i < myRecipe.directions.length; i++)
    document.write(myRecipe.directions[i] + '<br>')