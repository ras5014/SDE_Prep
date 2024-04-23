const express = require("express");
const app = express();
const admin = require("firebase-admin");
// const serviceAccount = require("./serviceAccountKey.json");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const routes = require("./routes");

//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(routes);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const PORT = process.env.PORT;

const server = () => {
  app.listen(PORT, () => {
    console.log(`Server started on localhost:${PORT}`);
  });
};

server();
