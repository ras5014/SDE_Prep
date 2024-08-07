import express from "express";
import cors from "cors";
import "dotenv/config";
import morgan from "morgan";

import { dbConnection as db } from "./config";

const app = express();
app.use(express.json());
app.use(cors());

// Logger middleware
app.use(morgan("dev"));

app.get("/test", async (req, res) => {
  res.json({ message: "Hello World" });
});

const PORT = process.env.PORT;
const server = async () => {
  await db();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

server();
