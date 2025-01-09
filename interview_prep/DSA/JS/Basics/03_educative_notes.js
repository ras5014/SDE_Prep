// Integer division in JavaScript
const num = Math.floor(11 / 2);
console.log(num); // 5

// Sort in descending order
const arr = [1, 2, 10, 3, 4];
arr.sort((a, b) => b - a);
console.log(arr); // [10, 4, 3, 2, 1]

// String Reverse
/* 
    Normally You can't directly reverse a string
    First Convert to array by splitting
    Then you can use array methods on it
*/
const str = "hello";
const reversedStr = str.split("").reverse().join("");
console.log(reversedStr); // olleh

// Just to show How you can skip actual logic in JS
const greet = "Hello World!";
const reversedWords = greet.split(" ").reverse().join(" ");
console.log(reversedWords); // World! Hello
