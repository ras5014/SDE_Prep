// Intersection of two arrays
// Time Complexity: O(n)
// Space Complexity: O(n)

A = [2, 3, 4, 5, 6];
B = [3, 4, 5, 4];

const intersection = (A, B) => {
  const map = [];
  const result = [];
  for (let i = 0; i < A.length; i++) map.push(A[i]);
  for (let i = 0; i < B.length; i++) {
    // if map includes then push to result & delete from map
    if (map.includes(B[i])) result.push(B[i]);
    map.splice(map.indexOf(B[i], 1));
  }
  return result;
};

console.log(intersection(A, B));
