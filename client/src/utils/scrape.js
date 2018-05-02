// api.js talks to back end server and calls for routes
// using aruguments

// Use axios to create route requests
import axios from "axios";

// export default object
export default {
	// calls for indeed jobs
	indeedJobs: (query, location) => {
		return axios.get(`/api/indeed/${query}/${location}`)
	},

	// calls for dice jobs
	diceJobs: (query, location) => {
		return axios.get(`/api/dice/${query}/${location}`)
	},

	// calls for stackOverFlow jobs
	stackOverflowJobs: (query, location) => {
		return axios.get(`/api/stackOverflow/${query}/${location}`)
	},

	simplyHiredJobs: (query, location) => {
		return axios.get(`/api/simplyHired/${query}/${location}`)
	}
};