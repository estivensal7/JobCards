// This file connects to MySQL using Sequelize
// Create dependencies
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || 'development';
var config = require(__dirname + './config.json')[env];
// Construct variable
let sequelize;

// Create sequelize connection
// If deployed on heroku, use JAWSDB database
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable]);
}
// Use local host
else {
	sequelize = new Sequelize("project3", "root", "root", {
		host: "localhost",
		dialect: "mysql",
		port: 8889,
		pool: {
			max: 5,
			min: 0,
			idle: 10000
		}
	});
}

// export sequlize instance
module.exports = sequelize;