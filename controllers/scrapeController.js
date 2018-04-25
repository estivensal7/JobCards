const cheerio = require("cheerio");
const request = require("request");
const indeed = require("indeed-scraper");

module.exports = {
	indeedJobs: function(req, res) {
		const query = req.params.query;
		const location = req.params.location;
		const newLocation = location.replace(",", "");

		const queryOptions = {
		  query: req.params.query,
		  city: req.params.location,
		  radius: '25',
		  level: 'entry_level',
		  jobType: 'fulltime',
		  maxAge: '7',
		  sort: 'date',
		  limit: '100'
		};

		indeed.query(queryOptions)
		.then(jobs => {
			res.json(jobs)
		})
	}
}