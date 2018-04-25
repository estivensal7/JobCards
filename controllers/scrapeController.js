// scrapeController sets job scraping functions to routes

// Create dependencies
const cheerio = require("cheerio");
const request = require("request");
const indeed = require("indeed-scraper");

// Exports object
module.exports = {
	// Get jobs from indeed-scraper
	indeedJobs: function(req, res) {
		// Set parameters as variables
		const query = req.params.query;
		const location = req.params.location;

		// Create query
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

		// Run node package, return as json object
		indeed.query(queryOptions)
		.then(jobs => {
			res.json(jobs)
		});
	},

	// Scrape Dice.com for jobs
	diceJobs: function(req, res) {
		// Set parameters as variables
		const query = req.params.query;
		const location = req.params.location;

		// Run request to dice.com
		request(`https://www.dice.com/jobs?q=${query.replace(" ", "+")}&l=${location.split(" ").join("+")}`, 
			function(error, result, html){
				const jobs = [];
				const $ = cheerio.load(html);
				$("div.serp-result-content").each(function(i, element) {
					const results = {
						"title": $(element).find("h3").text().trim(),
						"link": "https://www.dice.com" + $(element).find("a.loggedInVisited").attr("href"),
						"company": $(element).find("span.compName").text()
					};
					
					jobs.push(results)	
				})
				res.json(jobs);
			}
		);	
	},

	stackOverflowJobs: function(req, res) {
		const query = req.params.query;
		const location = req.params.location;
		const newLocation = location.replace(",", "");

		request(`https://stackoverflow.com/jobs?sort=i&q=${query.replace(" ", "+")}&l=${newLocation.split(" ").join("+")}`, 
			function(error, result, html) {
				const jobs = [];
				const $ = cheerio.load(html);

				$("div.-job-summary").each(function(i, element) {
					const results = {
						"title": $(element).find("h2.g-col10").text().trim(),
						"link": "https://stackoverflow.com" + $(element).find("a.job-link").attr("href"),
						"company": $(element).find("div.-name").text().trim()
					}
					
					jobs.push(results);			
				})

				res.json(jobs);
			}
		);
	}
}