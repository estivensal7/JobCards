// Controls database functions
// Requires models for connection
const db = require("../models");

module.exports = {
	// Creates new users
	newUser: function(req, res) {
		db.Users.create({
			username: req.body.username,
			password: req.body.password
		})
		.then(data => {
			res.json(data);
		})
	},

	// Retrieves uses based on username and password
	logIn: function(req, res) {
		db.Users.findOne({
			attributes: ["user_id", "username"],
			where: {
				username: req.params.username,
				password: req.params.password 
			}
		})
		.then(data => {
			res.json(data);
		})
	},

	// Save job pointing to the user's ID
	saveJob: function(req, res) {
		db.Saved_Jobs.create({
			title: req.body.title,
			link: req.body.link,
			company: req.body.company,
			user_id: req.body.userId
		})
		.then(data => {
			res.json(data);
		})
	},

	// Retrieves saved jobs based on user ID
	getSavedJobs: function(req, res) {
		db.Saved_Jobs.findAll({
			attributes: ["job_id", "title", "link", "company"],
			where: {
				user_id: req.params.id
			}
		})
		.then(data => 
			res.json(data));
	},

	// Get all notes for the user's saved job posting
	getNotes: function(req, res) {
		db.Notes.findAll({
			attributes: ["notes_id", "message"],
			where: {
				user_id: req.params.userId,
				job_id: req.params.jobId
			}
		})
		.then(data => 
			res.json(data));
	},

	addNewNote: function(req, res) {
		db.Notes.create({
			message: req.body.message,
			user_id: req.body.userId,
			job_id: req.body.jobId
		})
		.then(data => 
			res.json(data));
	},

	deleteNote: function(req, res) {
		db.Notes.destroy({
			where: {
				notes_id: req.params.id
			}
		})
		.then(data =>
			res.json(data));
	},

	removeSavedJob: function(req, res) {
		db.Notes.destroy({
			where: {
				job_id: req.params.jobId,
				user_id: req.params.userId
			}
		})
		.then(data => {
			db.Saved_Jobs.destroy({
				where: {
					user_id: req.params.userId,
					job_id: req.params.jobId
				}
			})
			.then(deleted => 
				res.json(deleted));
		});
	}
}