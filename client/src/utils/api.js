import axios from "axios";

export default {
	indeedJobs: () => {
		return axios.get("/api/indeed/Web Developer/New York, NY")
	},

	diceJobs: () => {
		return axios.get("/api/dice/Web Developer/New York, NY")
	},

	stackOverflowJobs: () => {
		return axios.get("/api/stackOverflow/Web Developer/New York, NY")
	}
};