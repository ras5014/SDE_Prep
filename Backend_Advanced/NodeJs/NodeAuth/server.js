const express = require("express");
const app = express();

const { pg, createUserTable } = require("./dbConfig");
const { initialize, authenticate } = require("./middlewares/auth");

app.use(express.json());

app.use((req, res, next) => {
  const { method, path } = req;
  console.log(`${method} ${path} at ${new Date().toISOString()}`);
  next();
});

app.use(initialize);

// Routers
const authRouter = require("./routers/auth");
app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 8080;

const server = async () => {
  try {
    // Connect to the database
    await pg.raw("SELECT 1");
    console.log("Database connected");

    // Create the users table if it doesn't exist
    await createUserTable();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server: ", error);
  }
};

server();
