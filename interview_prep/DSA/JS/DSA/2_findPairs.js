/*
  Problem: Find all pairs in an array
*/

const arr = [1, 2, 3, 4, 5];

// O(n^2) time complexity
const findPairs = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`Pair: ${arr[i]} and ${arr[j]}`);
    }
  }
};

findPairs(arr);

/*
 Output:
  Pair: 1 and 2
  Pair: 1 and 3
  Pair: 1 and 4
  Pair: 1 and 5
  Pair: 2 and 3
  Pair: 2 and 4
  Pair: 2 and 5
  Pair: 3 and 4
  Pair: 3 and 5
  Pair: 4 and 5
*/
