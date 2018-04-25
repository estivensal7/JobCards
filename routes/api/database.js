const router = require("express").Router();
const db = require("../../models");

router.route("/newUser")
	.post(function(req, res) {
		console.log(req.body.username);
		db.Users.create({
			username: req.body.username,
			password: req.body.password
		})
		.then(data => {
			res.json(data);
		})
	})

module.exports = router;