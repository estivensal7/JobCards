const router = require("express").Router();
const scrapeController = require("../../controllers/scrapeController");

router.route("/indeed/:query/:location")
	.get(scrapeController.indeedJobs);

module.exports = router;