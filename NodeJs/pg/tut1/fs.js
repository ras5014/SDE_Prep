const fs = require("fs");

// Synchronous file writing (Blocking)
fs.writeFileSync("./test.txt", "Hello World!");

// Asynchronous file writing (Non-blocking)
fs.writeFile("./test.txt", "Hello from Node.js!", (err) => {
  if (err) {
    console.error(err);
  }
  console.log("File written successfully!");
});

fs.readFile("./test.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
});

fs.appendFile("./test.txt", "Hello again!", (err) => {
  if (err) {
    console.error(err);
  }
  console.log("Data appended successfully!");
});

fs.cp("./test.txt", "test-copy.txt", (err) => {
  if (err) {
    console.error(err);
  }
  console.log("File copied successfully!");
});

// fs.unlink("test-copy.txt", (err) => {
//   if (err) {
//     console.error(err);
//   }
//   console.log("File deleted successfully!");
// });

fs.stat("./test.txt", (err, stats) => {
  if (err) {
    console.error(err);
  }
  console.log(stats);
});
