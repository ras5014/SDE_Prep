const services = require("../services/recipes");

const getAll = async (req, res, next) => {
  try {
    const recipes = await services.getAll();
    res.status(200).json(recipes);
  } catch (error) {
    next(error);
  }
};

const save = async (req, res, next) => {
  try {
    const {
      name,
      healthLabels,
      cookTimeMinutes,
      prepTimeMinutes,
      ingredients,
    } = req.body;

    const newRecipe = {
      name,
      healthLabels: [...healthLabels],
      cookTimeMinutes,
      prepTimeMinutes,
      ingredients: [...ingredients],
    };

    res.status(201).json({ data: await services.save(newRecipe) });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  save,
};
