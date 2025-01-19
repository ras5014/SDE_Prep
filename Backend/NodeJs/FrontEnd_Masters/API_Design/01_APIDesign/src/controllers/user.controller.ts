import { createNewUser, loginUser } from "../services/user.service";

export const signup = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const token = await createNewUser(username, password);
    res.json({ token });
  } catch (err) {
    err.type = "signup";
    next(err);
  }
};

export const signin = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const token = await loginUser(username, password);
    res.json({ token });
  } catch (err) {
    err.type = "signin";
    next(err);
  }
};
