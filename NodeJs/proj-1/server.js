import express from "express";

import { friendsRouter } from "./routes/friends.router.js";
import { messagesRouter } from "./routes/messages.router.js";

const app = express();

// Middleware
// Timer Middleware
app.use((req, res, next) => {
  const start = Date.now();
  next(); // U go to code part
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`);
});

app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Express Test!</h1>");
});

app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
