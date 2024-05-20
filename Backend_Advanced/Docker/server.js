const express = require("express");
const app = express();
const db = require("./dbConfig");

app.get("/", (req, res) => {
  res.send("Hello World, Updates!");
});

const server = async () => {
  const result = await db.raw("SELECT 1+1 AS result");
  console.log(result.rows[0].result);
  console.log("Connected to the database");
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
};

server();
