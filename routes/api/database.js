// database.js sends information to controller

// Create dependecies
const router = require("express").Router();
const databaseController = require("../../controllers/databaseController");

// Route for new user creation
router.route("/newUser")
	.post(databaseController.newUser);

// Route for loggin in, has 2 parameters
router.route("/logIn/:username/:password")
	.get(databaseController.logIn)

module.exports = router;