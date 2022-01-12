const passport = require("passport");
const googleStrategy = require("passport-google-oauth2").Strategy;

// * Models
const User = require("../models/user");
// console.log("dsdsd", process.env);
// * Settingup Passport google strategy
passport.use(
  new googleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: `/api/auth/login/callback`,
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      let user = await User.findOne({ email: profile.email });
      console.log(profile);
      if (!user) {
        user = new User({
          name: profile.displayName,
          email: profile.email,
          googleId: profile.id,
          photo: profile.picture,
        });

        await user.save();
      }
      done(null, user);
    }
  )
);

// * Passport serializeUser
passport.serializeUser((participant, done) => {
  console.log(participant);
  done(null, participant.id);
});

// * Passport deserializeUser
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});
