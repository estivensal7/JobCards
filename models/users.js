const Sequelize = require("sequelize");
const sequelizeInstance = require("../config/connection.js");

const Users = sequelizeInstance.define("users", {
	user_id : {
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	username: Sequelize.STRING,
	password: Sequelize.STRING
}, {
	timestamps: false
});

// Users.sync();

module.exports = Users;