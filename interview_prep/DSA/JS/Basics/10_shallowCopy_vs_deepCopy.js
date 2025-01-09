const originalArray = [1, 2, 3, 4, 5];

// Both these methods are shallow copies. (Original array is not changed)
const shallowCopy = originalArray.slice();
const shallowCopy1 = [...originalArray];

shallowCopy.push(6);

console.log("OriginalArray: ", originalArray); // [1, 2, 3, 4, 5]
console.log("ShallowCopy: ", shallowCopy); // [1, 2, 3, 4, 5, 6]

shallowCopy1.push(7);

console.log("ShallowCopy1: ", shallowCopy1); // [1, 2, 3, 4, 5, 7]

console.log("\n");

// Both these methods are deep copies. (Original array is changed)
const deepCopy = originalArray;
deepCopy.push(8);

console.log("OriginalArray: ", originalArray); // [1, 2, 3, 4, 5, 8]
console.log("DeepCopy: ", deepCopy); // [1, 2, 3, 4, 5, 8]
