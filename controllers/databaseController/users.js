// Controls database functions
// Requires models for connection
const db = require("../../models");

module.exports = {
	// Creates new users
	newUser: function(req, res) {
		const username = req.body.username;
		const password = req.body.password;

		// Checks if username already exists in database
		db.Users.findOne({
			attributes: ["username"],
			where: {
				username: username
			}
		})
		.then(data => {
			// if no data found, create new user
			if (!data) {
				db.Users.create({
					username: username,
					password: password
				})
				.then(data => {
					res.json(data);
				})
			} 
			// Else, send null
			else {
				res.send(null);
			}
		});
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
};