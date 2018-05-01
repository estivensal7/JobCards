// Controls database functions
// Requires models for connection
const db = require("../../models");

module.exports = {
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

	// Deletes saved job from user's saved list
	removeSavedJob: function(req, res) {
		// Remove all notes by user for this job
		db.Notes.destroy({
			where: {
				job_id: req.params.jobId,
				user_id: req.params.userId
			}
		})
		.then(data => {
			// Remove user's saved job 
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
};