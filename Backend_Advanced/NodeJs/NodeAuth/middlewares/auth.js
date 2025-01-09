require("dotenv").config();
const { pg } = require("../dbConfig");
const passport = require("passport");

var JwtStrategy = require("passport-jwt").Strategy; // Correct import
var ExtractJwt = require("passport-jwt").ExtractJwt;

var opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;
// Optional
opts.issuer = "accounts.examplesoft.com";
opts.audience = "yoursite.net";

passport.use(
  new JwtStrategy(opts, async function (jwt_payload, done) {
    console.log("JWT Payload:", jwt_payload); // Debugging
    try {
      const result = await pg.raw("SELECT * FROM users WHERE id = ?", [
        jwt_payload.sub,
      ]);
      const user = result.rows[0]; // Adjust this based on the actual structure of your result object
      console.log("user", user);
      if (user) {
        return done(null, user);
      } else {
        return done(null, false, { message: "User not found" });
      }
    } catch (error) {
      console.error("Error in passport-jwt strategy: ", error);
      return done(error, false);
    }
  })
);

const initialize = passport.initialize();

const authenticate = passport.authenticate("jwt", { session: false }); // Since we use jwt so no need of sessions

module.exports = { initialize, authenticate };
