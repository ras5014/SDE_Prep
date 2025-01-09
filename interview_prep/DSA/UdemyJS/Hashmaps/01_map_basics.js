const nums = [1, 2, 32, 2, 3, 4, 5, 4, 4];

// Find Most frequent number

// 1. Create a map
const map = new Map();

// 2. Loop through the array and add the number to the map
for (let num of nums) {
  if (map.has(num)) {
    map.set(num, map.get(num) + 1);
  } else {
    map.set(num, 1);
  }
}

// 3. Find the most frequent number
console.log(map, map.size);

let max = -Infinity,
  mostFrequentNumber = null;

// To iterate over a map
for (let [key, value] of map) {
  if (value > max) {
    max = value;
    mostFrequentNumber = key;
  }
}

console.log(mostFrequentNumber);

// 4. Other methods
map.delete(32);
console.log(map);
