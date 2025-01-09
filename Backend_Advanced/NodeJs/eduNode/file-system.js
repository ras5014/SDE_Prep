const fs = require("fs").promises;

// Checking the stats of a file
const getStats = async (path) => {
  try {
    const stats = await fs.stat(path);
    console.log(stats);
    console.log(`isFile: ${stats.isFile()}`);
    console.log(`isDirectory: ${stats.isDirectory()}`);
  } catch (error) {
    console.error(error);
  }
};

// getStats("./test.txt");

// Reading the contents of a file
const readFile = async (path) => {
  try {
    const contents = await fs.readFile(path, "utf-8");
    console.log(contents);
  } catch (error) {
    console.error(error);
  }
};

// readFile("./test.txt");

// Write to a file
const writeFile = async (path, data) => {
  try {
    await fs.writeFile(path, data);
  } catch (error) {
    console.error(error);
  }
};

// writeFile("./test.txt", "hello world");

// Appending to a file
const appendFile = async (path, data) => {
  try {
    await fs.appendFile(path, data);
  } catch (error) {
    console.error(error);
  }
};

appendFile("./test.txt", "\nappending another hello world");
