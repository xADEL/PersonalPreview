function toggleRecipe(recipeId) {
    var recipeDetails = document.getElementById(recipeId);
    if (recipeDetails.style.display === 'none' || recipeDetails.style.display === '') {
        recipeDetails.style.display = 'block';
    } else {
        recipeDetails.style.display = 'none';
    }
}
