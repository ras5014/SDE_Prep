const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const mkdirp = require("mkdirp");

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mkdirp.sync("./tmp/uploads");
// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("Body: ", req.body);
    console.log("File", file);
    cb(null, "./tmp/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()} - ${file.originalname}`);
  },
});

const upload = multer({ storage });

app.use(upload.single("file"));

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.post("/upload", (req, res) => {
  res.json({ message: "File uploaded successfully" });
});

const PORT = 5000;
const server = () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

server();
