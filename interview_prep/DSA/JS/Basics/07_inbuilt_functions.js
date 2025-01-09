// To find max and min of numbers (O(n) time complexity)
console.log(Math.min(1, 2, 3, 4, 5)); // 1
console.log(Math.max(1, 2, 3, 4, 5)); // 5

// To find max & min of array (O(n) time complexity)
const arr = [12, 145, 34, 90];
console.log(Math.min(...arr));
console.log(Math.max(...arr));

// To reverse an array (O(n) time complexity)
const array = [1, 2, 3];
array.reverse();
console.log(array); // Prints [3, 2, 1]

// Below all functions have (O(1) time complexity)
// Rounding off
console.log(Math.round(2.5)); // 3
console.log(Math.round(2.4)); // 2

// Absolute value
console.log(Math.abs(-5.6)); // 5.6

// Square root
console.log(Math.sqrt(16)); // 4

// Power
console.log(Math.pow(2, 3)); // 8

// Random number
console.log(Math.random()); // Random number between 0 and 1

// Random number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1);
