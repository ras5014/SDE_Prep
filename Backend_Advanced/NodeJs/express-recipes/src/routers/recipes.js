const express = require("express");
const router = express.Router();

const { getAll, save } = require("../controllers/recipes");

// GET /api/v1/recipes
router.route("/").get(getAll).post(save);

module.exports = router;
