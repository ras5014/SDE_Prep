const s = ["a", "b", "c"];
console.log("Printing the String: ", s);

// push (Add an element to the end of the array) -> O(1)
s.push("d");
console.log("After Pushing 'd': ", s);

// pop (Remove an element from the end of the array & return that element) -> O(1)
console.log("Poped Element: ", s.pop());
console.log("After Pop: ", s);

// Unshift (Add an element to the start of the array) -> O(n)
s.unshift("x");
console.log("After Unshift 'x': ", s);

// Shift (Remove an element from the start of the array & return that element) -> O(n)
console.log("Shifted Element: ", s.shift());

// Splice (Add/Remove an element from the middle of the array) -> O(n)
s.splice(2, 0, "alien");
console.log("After Splice: ", s);

// Search and delete/add an element from the middle of the array
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Before: ", nums);
const index = nums.indexOf(5);
nums.splice(index, 1);
console.log("After: ", nums);
// Wanna delete and some elements from the middle of the array at 4
const index1 = nums.indexOf(4);
nums.splice(index1, 1, 11, 12);
console.log("After: ", nums);
