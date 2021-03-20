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