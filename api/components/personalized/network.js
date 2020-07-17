const routes = require("../../network/routes");

const router = require("express").Router();

router.get("/", function (req, res) {
  res.send("Personalized");
});

module.exports = router;
