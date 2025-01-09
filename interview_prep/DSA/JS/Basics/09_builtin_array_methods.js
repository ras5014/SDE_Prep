// Built-in Array Methods

// The value-inserting methods
// ===========================

const arr1 = [1, 2, 3, 4, 5];

/*
    The push() method adds an element at the end of the array. 
    If we try to push another array, 
    it adds as individual elements to the existing array.
*/
arr1.push(6); // T.C. - O(1)
console.log(arr1); // [1, 2, 3, 4, 5, 6]

arr1.push([7, 8, 9]);
console.log(arr1); // [1, 2, 3, 4, 5, 6, [7, 8, 9]]

/*
The unshift() method adds an element at the beginning of the array. 
*/

arr1.unshift(0); // T.C. - O(n)
console.log(arr1); // [0, 1, 2, 3, 4, 5, 6, [7, 8, 9]]

/*
    The following methods are used to remove values from arrays:

        - The pop() method removes an element from the end of the array.

        - The shift() method removes an element from the beginning of the array. 
*/

// pop
arr1.pop(); // T.C. - O(1)
console.log(arr1); // [0, 1, 2, 3, 4, 5, 6]

// shift
arr1.shift(); // T.C. - O(n)
console.log(arr1); // [1, 2, 3, 4, 5, 6]

/*
    In JavaScript, the splice() method is used to remove or add items to an array. 
    It modifies the original array, rather than returning a new one. 
    Time complexity: O(n)
*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// remove 2 elements from index 2
fruits.splice(2, 2, "Kiwi", "Pineapple"); // (startIndex, No. of items to delete, Items to be inserted)
console.log(fruits); // ["Banana", "Orange", "Kiwi", "Pineapple"]

/*
    The splice() method overwrites the original array.
*/

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.splice(2, 0, "Kiwi", "Pineapple"); // (startIndex, No. of items to delete, Items to be inserted)
console.log(fruits1); // ["Banana", "Orange", "Kiwi", "Pineapple", "Apple", "Mango"]

/*
    The slice() method creates a shallow copy of a portion of an array into a new array.
    It does not modify the original array.
    Time complexity: O(n)
*/

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
const slicedFruits = fruits2.slice(1, 3); // (startIndex, endIndex)
console.log(slicedFruits); // ["Orange", "Apple"]
/*
    The search-related methods
        The following methods are used to search for values in arrays:

            - The indexOf() method searches for an element in the array and returns the index of the first occurrence.

            - The includes() method searches for an element in the array and returns true if it exists; otherwise returns false.

            - The lastIndexOf() method searches for an element in the array and returns the index of the last occurrence.
*/

const letters = ["e", "d", "u", "c", "a", "t", "i", "v", "e"];
console.log(letters.indexOf("e")); // 0
console.log(letters.includes("f")); // false
console.log(letters.lastIndexOf("e")); // 8

/*
    Arrangement-related methods
    reverse() & sort()
*/

// Reverses the original string
letters.reverse();
console.log(letters); // ["e", "v", "i", "t", "u", "c", "a", "d", "e"]

// Sorts the original string
letters.sort();
console.log(letters); // ["a", "c", "d", "e", "e", "i", "t", "u", "v"]

// If you try to solve without using comparison then JS will sort it as a string
// Sorting in ascending order
const nums1 = [1, 20, 3, 4, 5];
nums1.sort((a, b) => a - b);
console.log(nums1); // [1, 3, 4, 5, 20]

// To sort in descending order
const nums = [1, 2, 3, 4, 5];
nums.sort((a, b) => b - a);
console.log(nums); // [5, 4, 3, 2, 1]
