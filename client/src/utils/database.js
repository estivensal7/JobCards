// database.js handles database connection, storing and retrieving
// Requires axios for route connection
import axios from "axios";

export default {
	// Create new user route
	newUser: (username, password) => {
		const data = {
			username, 
			password
		};
		
		return axios.post("/api/newUser", data);
	},

	// Retrieve user information route
	logIn: (username, password) => {
		return axios.get(`/api/logIn/${username}/${password}`);
	},

	// Save job to database by userID
	saveJob(data) {
		return axios.post("/api/saveJob", data);
	},

	//Get saved jobs by user
	getSavedJobs: (id) => {
		return axios.get(`/api/getSavedJobs/${id}`);
	},

	// Get all notes created by user on saved job
	getNotes: (userId, jobId) => {
		return axios.get(`/api/getNotes/${userId}/${jobId}`);
	},

	// Add new note on saved job by user
	addNewNote: (data) => {
		return axios.post('/api/addNewNote', data)
	}
}