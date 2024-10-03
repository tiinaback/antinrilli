// Reseptin haku
function searchRecipes(query) {
    const apiUrl = `https://dummyjson.com/recipes/search?q=${query}`;
    fetch(apiUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(responseJson) {
            displayRecipe(responseJson, "recipeResults");
        })
        .catch(function(error) {
            document.getElementById("recipeResults").innerHTML = 
                "<p>Reseptin haku epäonnistui.</p>";
        });
}

// Reseptien näyttäminen
function displayRecipe(data, elementId) {
    const recipes = data.recipes;
    let content = "<ul>";

    recipes.forEach(function(recipe) {
        content += `<li>Nimi: ${recipe.name}</li>`;
        content += `<li>Vaikeus: ${recipe.difficulty}</li>`;
        content += `<li>Ainesosat: ${recipe.ingredients}</li>`;
        content += `<li>Kategoria: ${recipe.cuisine}</li>`;
        content += `<li>Ohjeet: ${recipe.instructions}</li>`;
        content += `<hr>`;
    });

    content += "</ul>";
    document.getElementById(elementId).innerHTML = content;
}

document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const query = document.getElementById('searchInput').value;
    searchRecipes(query);
});
