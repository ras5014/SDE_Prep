require("dotenv").config();
const express = require("express");
const app = express();
const { initializeFirebaseApp } = require("./db/firebaseConfig");

const PORT = process.env.PORT;
initializeFirebaseApp();
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

const server = () => {
  app.listen(PORT, () => {
    console.log(`Server started on localhost:${PORT}`);
  });
};

server();
