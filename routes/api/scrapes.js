// scrape.js sends to scraping functions based on route specified

// Create dependencies
const router = require("express").Router();
const scrapeController = require("../../controllers/scrapeController");

// Routes to indeed-scrape npm function
router.route("/indeed/:query/:location")
	.get(scrapeController.indeedJobs);

// Routes to dice.com scraping function
router.route("/dice/:query/:location")
	.get(scrapeController.diceJobs);

// Routes to stackoverflow.com scraping function
router.route("/stackOverflow/:query/:location")
	.get(scrapeController.stackOverflowJobs);

router.route("/simplyHired/:query/:location")
	.get(scrapeController.simplyHiredJobs);

module.exports = router;