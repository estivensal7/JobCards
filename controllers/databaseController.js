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
	}
}