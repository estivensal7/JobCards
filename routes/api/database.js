// database.js sends information to controller

// Create dependecies
const router = require("express").Router();
const databaseController = require("../../controllers/databaseController");

// Route for new user creation
router.route("/newUser")
	.post(databaseController.newUser);

// Route for loggin in, requires 2 parameters
router.route("/logIn/:username/:password")
	.get(databaseController.logIn);

router.route("/saveJob")
	.post(databaseController.saveJob);

// Route for retrieving saved jobs by user,
// requires 1 parameter
router.route("/getSavedJobs/:id")
	.get(databaseController.getSavedJobs);	

router.route("/getNotes/:userId/:jobId")
	.get(databaseController.getNotes);

router.route("/addNewNote")
	.post(databaseController.addNewNote);

router.route("/deleteNote/:id")
	.delete(databaseController.deleteNote);

router.route("/removeSavedJob/:userId/:jobId")
	.delete(databaseController.removeSavedJob);

module.exports = router;