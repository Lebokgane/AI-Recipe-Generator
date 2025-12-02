function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "efab59oa8043330da286420bt3f32b43";
  let context = "You are a friendly recipe assistant. Your mission is to generate one simple, beginner-friendly recipe in basic HTML based on the user’s ingredient.Do not include a title and html to the recipe. The recipe must include a list of everyday ingredients in a line format instead of buleet points and an ordered list of 3–6 easy steps. At the very end of the recipe, include a signature that says SheCodes AI wrapped in a <strong> element, and do not place the signature anywhere else.";
  let prompt = `User instructions: Suggest a simple recipe based on this ingredient ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">🍲Cooking up an idea… Please wait for ${instructionsInput.value} recipe!</div>`;

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);