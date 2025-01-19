require("dotenv").config();
const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");

// Find user from services/auth
const { find: findUser } = require("../services/auth");

const JWT_SECRET = process.env.JWT_SECRET;

// Make a new strategy
const strategy = new Strategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET,
  },
  async (jwtPayload, done) => {
    try {
      const user = await find({ id: jwtPayload.id });

      if (!user) {
        const err = new Error("User not found");
        err.statusCode = 404;
        throw err;
      }

      done(null, user);
    } catch (error) {
      done(error);
    }
  }
);

passport.use(strategy);

const initialize = () => passport.initialize();

const authenticate = () => passport.authenticate("jwt", { session: false });

module.exports = {
  initialize,
  authenticate,
};
