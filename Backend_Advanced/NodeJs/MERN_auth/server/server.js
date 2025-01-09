const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require("./routes/auth.route");
const auth = require("./middlewares/auth.middleware");

const app = express();

// Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(express.json());
app.use(cors());

// Passport
app.use(auth.initialize());

// Routers
app.use("/api/v1/auth", authRouter);

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

const PORT = 8080;
const server = () => {
  mongoose.connect(process.env.MONGO_URI);
  mongoose.connection.on("connected", () => console.log("MongoDB Connected"));
  app.listen(PORT, () => {
    console.log("Server is running on port 8080");
  });
};

server();
