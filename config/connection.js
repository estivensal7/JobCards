// This file connects to MySQL using Sequelize
 
// Create dependencies
const Sequelize = require("sequelize");

// Create sequelize connection
const sequelize = new Sequelize("project3", "root", "root", {
	host: "localhost",
	dialect: "mysql",
	port: 3306,
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});

// export sequlize instance
module.exports = sequelize;