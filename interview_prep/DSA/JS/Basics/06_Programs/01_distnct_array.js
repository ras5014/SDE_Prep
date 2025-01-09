// Make array of distinct elements

// Method-1 (Using Set)
const distinctArray_usingSet = (arr) => {
  // Make a new set from the array
  const set = new Set(arr);
  // Convert the set back to an array
  // arr = Array.from(set);
  arr = [...set];
  return arr;
};

console.log(distinctArray_usingSet([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));
// Output: [ 1, 2, 3, 4, 5 ]
/*
Time Complexity: O(n):
  - Creating a set from an array takes O(n) time.
  - Converting a set back to an array takes O(n) time.
Space Complexity: O(n):
  - The space used by the set is O(n).
*/

// Distnict Array useing hashmap
const distnctArray = (arr) => {
  const res = [];
  const map = new Map();

  for (let item of arr) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
      res.push(item);
    }
  }

  return res;
};

console.log(distnctArray([1, 2, 2, 3, 5, 6, 7, 7]));
// Output: [ 1, 2, 3, 5, 6, 7 ]

/*
Time Complexity: O(n):
  - Iterating through the array takes O(n) time.
  - The time complexity of the set and get operations of the map is O(1).
Space Complexity: O(n):
  - The space used by the map is O(n).
*/

// Number of occurrences
const numberOfOccurrences = (arr) => {
  const map = new Map();
  for (let item of arr) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  }

  return map;
};

console.table(numberOfOccurrences([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));
// Output:
// { '1': 2, '2': 2, '3': 2, '4': 2, '5': 2 }

/*
Time Complexity: O(n):
  - Iterating through the array takes O(n) time.
  - The time complexity of the set and get operations of the map is O(1).
Space Complexity: O(n):
  - The space used by the map is O(n).
*/
