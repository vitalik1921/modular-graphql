import passport from "passport";
import { Strategy } from "passport-facebook";
import dotenv from "dotenv";
dotenv.config();

passport.use(
  new Strategy(
    {
      clientID: process.env["FACEBOOK_ID"],
      clientSecret: process.env["FACEBOOK_SECRET"],
      callbackURL: "/return",
    },
    function (accessToken, refreshToken, profile, cb) {
      // In this example, the user's Facebook profile is supplied as the user
      // record.  In a production-quality application, the Facebook profile should
      // be associated with a user record in the application's database, which
      // allows for account linking and authentication with other identity
      // providers.
      return cb(null, profile);
    }
  )
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

export default passport;
