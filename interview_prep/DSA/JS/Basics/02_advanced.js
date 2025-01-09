// var vs let
// var is es5, let is es6, es6 is backward compatible
// var is hoisted, let is not hoisted

// let is block scoped, var is function scoped
function abcd() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i); // But let i will not be accessible here
}

abcd();

// var adds to the window object, let does not

// There are some features we don't have in JS, but still we are able use it because JS uses them from window object
// Window is a box of feature given by browser

// alert("Hello");
// prompt("Enter your name"); These are not JS features, these are browser features
