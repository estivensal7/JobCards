// Controls database functions
// Requires models for connection
const db = require("../../models");

module.exports = {
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

	// Add new note to saved job by user
	addNewNote: function(req, res) {
		db.Notes.create({
			message: req.body.message,
			user_id: req.body.userId,
			job_id: req.body.jobId
		})
		.then(data => 
			res.json(data));
	},

	// Deletes a note from saved job by user
	deleteNote: function(req, res) {
		db.Notes.destroy({
			where: {
				notes_id: req.params.id
			}
		})
		.then(data =>
			res.json(data));
	}
}