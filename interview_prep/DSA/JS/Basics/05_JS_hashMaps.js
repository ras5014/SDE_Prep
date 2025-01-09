// JavaScript Hash Maps
const hashMap = new Map();

// Add
hashMap.set("apple", 25);
hashMap.set("banana", 33);
hashMap.set("mango", 11);

// Get
console.log(hashMap.get("apple")); // Output: 25

// Delete
hashMap.delete("apple");
console.table(hashMap); // Output: { banana: 33, mango: 11 }

// Size
console.log(hashMap.size); // Output: 2

// has (returns true if key exists)
console.log(hashMap.has("banana")); // Output: true

// Accessing each entry in the map
for (let [key, value] of hashMap) {
  if (key === "banana") {
    hashMap.set(key, value + 5);
  }
  console.log(key, value);
}

// Output:
// banana 38
// mango 11

console.table(hashMap); // Output: { banana: 38, mango: 11 }
