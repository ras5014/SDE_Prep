// Distinct Elements

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; // Here 11 is the only distinct element

const distinctArray = (arr) => {
  const res = [];
  const map = new Map();
  for (let i of arr) {
    map.set(i, (map.get(i) || 0) + 1);
  }
  console.log(map);
  for (let [key, value] of map) {
    if (value === 1) {
      res.push(key);
    }
  }
  return res;
};

console.log("\nAnswer: ", distinctArray(arr)); // [ 11 ]
