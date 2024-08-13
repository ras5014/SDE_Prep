setTimeout(() => {
  console.log("Hello");
}, 2000);

setInterval(() => {
  console.log("World");
}, [2000]);

setImmediate(() => {
  console.log("Hello World");
});
