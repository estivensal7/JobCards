const Sequelize = require("sequelize");
const sequelizeInstance = require("../config/connection.js");
const Users = require("./users.js");
const Saved_Jobs = require("./saved_jobs.js");

const Notes = sequelizeInstance.define("notes", {
	notes_id: {
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	message: Sequelize.STRING
}, {
	timestamps: false
});

Notes.belongsTo(Users, {foreignKey: "user_id"});
Notes.belongsTo(Saved_Jobs, {foreignKey: "job_id"});

// Notes.sync();

module.exports = Notes;