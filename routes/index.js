const path = require("path");
const router = require("express").Router();
const scrapes = require("./api/scrapes");
// const database = require("./api/database");

router.use("/api", scrapes);
// router.use("/api", database);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;