const recipe = {
    title: "Guacamole",
    servings: 4,
    ingredients: ['3 Advocados', '1 Lime', '1 Teaspoon Salt', '1/2 Cup Onion', '3 Tablespoons Cilantro', '2 Diced Tomatoes', '1 Teaspoon Garlic', '1 Pinch Ground Pepper'],
    displayRecipe: function() {
        console.log(`${recipe.title}\nServes: ${recipe.servings}\nIngredients:\n-${recipe.ingredients.join('\n-')}`);
    }
}


recipe.displayRecipe();