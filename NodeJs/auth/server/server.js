const express = require("express");
const app = express();
const routes = require("./routes");
const helmet = require("helmet");
const db = require("./dbconfig");
const cors = require("cors");
const PORT = 8000;

// middleware
app.use(express.json());
app.use(helmet()); // For security (e.g. Others can't see the server's info(coding language express))
app.use(cors()); // For Cross-Origin Resource Sharing (e.g. React can communicate with Express)

// routes
app.use(routes);

// Intial Loading Test
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Express Server</h1>");
});

const server = async () => {
  const res = await db.raw("SELECT 1");
  if (res.rows[0]) {
    console.log("Database connected successfully");
  } else {
    console.log("Database connection failed");
  }
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

server();
