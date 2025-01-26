const fs = require("fs");

// Create a new file (Synchronously/Blocking)
fs.writeFileSync("./files/text.txt", "Hello World!");

// CReate a new file (Asynchronously/Non-Blocking)
fs.writeFile("./files/text1.txt", "Hello World!", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("File created successfully!");
  }
});

// Read file
const data = fs.readFileSync("./files/text.txt", "utf8");
console.log(data);
