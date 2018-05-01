// database.js sends information to controller

// Create dependecies
const router = require("express").Router();
const databaseController = require("../../controllers/databaseController");

// Route for new user creation
router.route("/newUser")
	.post(databaseController.Users.newUser);

// Route for loggin in, requires 2 parameters
router.route("/logIn/:username/:password")
	.get(databaseController.Users.logIn);

router.route("/saveJob")
	.post(databaseController.Saved_Jobs.saveJob);

// Route for retrieving saved jobs by user,
// requires 1 parameter
router.route("/getSavedJobs/:id")
	.get(databaseController.Saved_Jobs.getSavedJobs);	

router.route("/getNotes/:userId/:jobId")
	.get(databaseController.Notes.getNotes);

router.route("/addNewNote")
	.post(databaseController.Notes.addNewNote);

router.route("/deleteNote/:id")
	.delete(databaseController.Notes.deleteNote);

router.route("/removeSavedJob/:userId/:jobId")
	.delete(databaseController.Saved_Jobs.removeSavedJob);

module.exports = router;