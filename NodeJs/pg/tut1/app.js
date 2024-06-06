// Streams
// Streams are objects that let you read data from a source or write data to a destination in continuous fashion.
const express = require("express");
const fs = require("fs");
const zlib = require("zlib");

const app = express();

const statusMonitor = require("express-status-monitor")();
app.use(statusMonitor);

fs.createReadStream("./1mbtestfile.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("./1mbtestfile.txt.gz"));

app.get("/", (req, res) => {
  const stream = fs.createReadStream("./1mbtestfile.txt", "utf8");
  stream.on("data", (chunk) => {
    res.write(chunk);
  });
  stream.on("end", () => {
    res.end();
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
