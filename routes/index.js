// index.js sets the default bride for all routes.
// Uses router to find routes and return data to server

// Create dependencies
const path = require("path");
const router = require("express").Router();
const scrapes = require("./api/scrapes");
const database = require("./api/database");

// Router for scraping routes
router.use("/api", scrapes);
// Router for database communication
router.use("/api", database);

// Default route to index.html
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Export and return route results
module.exports = router;