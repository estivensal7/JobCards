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
	}
}