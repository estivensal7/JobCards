const Sequelize = require("sequelize");
const sequelizeInstance = require("../config/connection.js");
const Users = require("./users.js");

const Saved_Jobs = sequelizeInstance.define("saved_jobs", {
	job_id: {
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	title: Sequelize.STRING,
	link: Sequelize.STRING,
	company: Sequelize.STRING,
}, {
	timestamps: false
})

Saved_Jobs.belongsTo(Users, {foreignKey: "user_id"});

// Saved_Jobs.sync();

module.exports = Saved_Jobs;