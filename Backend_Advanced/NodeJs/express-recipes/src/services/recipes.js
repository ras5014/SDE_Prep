const fs = require("fs").promises;
const path = require("path");

const recipesPath = path.join(__dirname, "..", "..", "db", "recipes.json");

const getAll = async () => JSON.parse(await fs.readFile(recipesPath));

const save = async (recipe) => {
  const recipes = await getAll();
  recipe.id = recipes.length + 1;

  recipes.push(recipe);
  await fs.writeFile(recipesPath, JSON.stringify(recipes));
  return recipe;
};

module.exports = {
  getAll,
  save,
};
