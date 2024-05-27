const searchForm = document.querySelector('form');
const searchInput = document.querySelector('#search');
const resultsList = document.querySelector('#results');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchRecipes();
});

async function searchRecipes() {
    const searchValue = searchInput.value.trim();
    const response = await fetch(`https://api.edamam.com/search?q=${searchValue}&app_id=85069887&app_key=4bfb758b594efeb89977f6811aef573b&from=0&to=10`);
    const data = await response.json();
    displayRecipes(data.hits);
}

function displayRecipes(recipes) {
    let html = '';
    recipes.forEach((recipe) => {
        html += `
        <div class="col-md-4">
            <div class="card">
                <img src="${recipe.recipe.image}" class="card-img-top" alt="${recipe.recipe.label}">
                <div class="card-body">
                    <h5 class="card-title">${recipe.recipe.label}</h5>
                    <ul class="list-unstyled">
                        ${recipe.recipe.ingredientLines.map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>
                    <a href="${recipe.recipe.url}" target="_blank" class="btn btn-primary">View Recipe</a>
                </div>
            </div>
        </div>
        `;
    });
    resultsList.innerHTML = html;
}
