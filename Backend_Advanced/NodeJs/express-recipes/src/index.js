const express = require("express");
const { handleError } = require("./utils/error");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging Middleware
app.use((req, res, next) => {
  const { method, path } = req;
  console.log(
    `New request to: ${method} ${path} at ${new Date().toISOString()}`
  );
  next();
});

// To serve static files
// const path = require("path");
// const publicPath = path.join(__dirname, "..", "public");
// app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.redirect("/api/v1/recipes"); // To redirect to another API route
});

// Router middleware
const recipesRouter = require("./routers/recipes");
const authRouter = require("./routers/auth");
app.use("/api/v1/recipes", recipesRouter);
app.use("/api/v1/auth", authRouter);

app.use(handleError); // Error handling middleware

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI;

const PORT = process.env.PORT || 8080;
const server = async () => {
  const db = await mongoose.createConnection(MONGO_URI).asPromise();
  if (db.readyState === 1) {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } else {
    console.log("Failed to connect to MongoDB");
    process.exit(1);
  }
};

server();
