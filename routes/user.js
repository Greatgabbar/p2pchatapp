const router = require("express").Router();
const passport = require("passport");
const isAuthenticated = require("../middleware/isAuthenticated");

router.get("/profile", isAuthenticated, (req, res) => {
  res.send({ user: req.user });
});

module.exports = router;
