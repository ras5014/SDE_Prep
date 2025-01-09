require("dotenv").config();
const passport = require("passport");

const find = require("../services/auth.service");

const { ExtractJwt, Strategy: JwtStrategy } = require("passport-jwt");

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;
opts.issuer = "accounts.examplesoft.com";
opts.audience = "yoursite.net";

console.log(opts);
const strategy = new JwtStrategy(opts, async function (jwt_payload, done) {
  console.log(jwt_payload);
  try {
    const user = await find(jwt_payload.email);
    if (!user) {
      const err = new Error("User not found");
      err.statusCode = 404;
      throw err;
    }
    done(null, user);
  } catch (error) {
    done(error, false);
  }
});

passport.use(strategy);

const initialize = () => {
  return passport.initialize();
};

const authenticate = () => {
  return passport.authenticate("jwt", { session: false });
};

module.exports = {
  initialize,
  authenticate,
};
