/*
    array chunk = Given an array and chunk size, divide the array into many subarrays where each subarray is of length size
    ([1, 2, 3, 4, 5, 6, 7, 8], 3) => [[1, 2, 3], [4, 5, 6], [7, 8]]
*/

// Universal Solution
const arrayChunk = (arr, chunkSize) => {
  // Two pointer approach

  // Declare s and e as two pointers
  let s = 0,
    e = 0,
    result = [],
    temp = [];

  // Run till e reaches end of array
  while (e < arr.length) {
    // Push to temp in a sliding window of chunkSize
    if (e - s < chunkSize) {
      temp.push(arr[e]);
      e++;
    } else {
      // When winow exceeds bring start to end position
      s = e;
      result.push(temp);
      temp = [];
    }
  }

  // if [1, 2, 3, 4, 5] then [1, 2, 3] will be in result array but [4, 5] is not
  if (temp) {
    result.push(temp);
  }

  return result;
};

const result = arrayChunk([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(result);

// O(n) - time complexity approach

// JavaScript short-cut Solution
const arrayChunk2 = (arr, chunkSize) => {
  const result = [];
  let index = 0;

  while (index < arr.length) {
    // For 7 and 8, it will return [7, 8], because slice will never go out of bound (Only includes elements within the array)
    const temp = arr.slice(index, index + chunkSize);
    result.push(temp);
    index = index + chunkSize;
  }

  return result;
};

const result1 = arrayChunk2([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(result1);
