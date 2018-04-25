const router = require("express").Router();
const scrapeController = require("../../controllers/scrapeController");

router.route("/indeed/:query/:location")
	.get(scrapeController.indeedJobs);

router.route("/dice/:query/:location")
	.get(scrapeController.diceJobs);

router.route("/stackOverflow/:query/:location")
	.get(scrapeController.stackOverflowJobs);

module.exports = router;