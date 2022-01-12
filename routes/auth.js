const router = require("express").Router();
const passport = require("passport");
router.get(
  "/login",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    failureRedrect: `${process.env.CLIENT_URL}/`,
  })
);

router.get("/login/callback", (req, res, next) => {
  passport.authenticate(
    "google",
    {
      scope: ["profile", "email"],
    },
    function (err, user, info) {
      if (!user)
        return res.redirect(`${process.env.CLIENT_URL}/error?msg=${err}`);
      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }

        return res.redirect(`${process.env.CLIENT_URL}/dashboard`);
      });
    }
  )(req, res, next);
});

module.exports = router;
