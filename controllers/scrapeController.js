// scrapeController sets job scraping functions to routes

// Create dependencies
const cheerio = require("cheerio");
const request = require("request");
const indeed = require("indeed-scraper");

// Exports object
module.exports = {
	// Get jobs from indeed-scraper npm
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

		// Run request to dice.com, replaces spaces with +
		request(`https://www.dice.com/jobs?q=${query.replace(" ", "+")}&l=${location.split(" ").join("+")}`, 
			function(error, result, html){
				// set array to store results
				const jobs = [];
				// Set cheerio to html result
				const $ = cheerio.load(html);

				// For each element with the specified class, look for text or
				// attribute to target and store
				$("div.serp-result-content").each(function(i, element) {
					// results stores targeted data into an object
					// title: targets the job title
					// link: targets a link refrence inside an attribute, adds a header
					// company: adds company name
					const results = {
						"title": $(element).find("h3").text().trim(),
						"link": "https://www.dice.com" + $(element).find("a.loggedInVisited").attr("href"),
						"company": $(element).find("span.compName").text()
					};
					// push results into array
					jobs.push(results)	
				})
				// returns scraped data
				res.json(jobs);
			}
		);	
	},

	// Scrape stackoverflow.com for jobs
	stackOverflowJobs: function(req, res) {
		// Set parameters as variables
		const query = req.params.query;
		const location = req.params.location;
		// replaces commas precent in string with an empty string
		const newLocation = location.replace(",", "");

		// Run request to stackoverflow.com, replaces spaces with +
		request(`https://stackoverflow.com/jobs?sort=i&q=${query.replace(" ", "+")}&l=${newLocation.split(" ").join("+")}`, 
			function(error, result, html) {
				// set array to store results
				const jobs = [];
				// Set cheerio to html result
				const $ = cheerio.load(html);

				// For each element with the specified class, look for text or
				// attribute to target and store
				$("div.-job-summary").each(function(i, element) {
					// results stores targeted data into an object
					// title: targets the job title
					// link: targets a link refrence inside an attribute, adds a header
					// company: adds company name
					const results = {
						"title": $(element).find("h2.g-col10").text().trim(),
						"link": "https://stackoverflow.com" + $(element).find("a.job-link").attr("href"),
						"company": $(element).find("div.-name").text().trim()
					}
					// push results into array
					jobs.push(results);			
				})
				// returns scraped data
				res.json(jobs);
			}
		);
	},

	simplyHiredJobs: function(req, res) {
		const query = req.params.query;
		const location = req.params.location;
		const newLocation = location.replace(",", "");

		request(`https://www.simplyhired.com/search?q=${query.replace(" ", "+")}&l=${newLocation.split(" ").join("+")}`,
			function(error, result, html) {
				const jobs = [];
				const $ = cheerio.load(html);

				$("div.card.js-job").each(function(i, element) {

					const results = {
						"title": $(element).find("a.card-link.js-job-link").text(),
						"link": "https://www.simplyhired.com" + $(element).find("a.card-link.js-job-link").attr("href"),
						"company": $(element).find("span.jobposting-company").text()
					}
					jobs.push(results);
				})
				res.json(jobs);
			}
		)
	}

}