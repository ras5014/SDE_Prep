import prisma from "../../db";
import { comparePasswords, hashedPassword, createJWT } from "../modules/auth";

export const createNewUser = async (username, password) => {
  const hash = await hashedPassword(password);

  const user = await prisma.user.create({
    data: {
      username,
      password: hash,
    },
  });

  const token = createJWT(user);
  return token;
};

export const loginUser = async (username, password) => {
  const user = await prisma.user.findUnique({
    where: { username: username },
  });

  if (!user) {
    throw new Error("User not found");
    return;
  }

  const isValid = await comparePasswords(password, user.password);

  if (!isValid) {
    throw new Error("Invalid username or password");
    return;
  }

  const token = createJWT(user);
  return token;
};
