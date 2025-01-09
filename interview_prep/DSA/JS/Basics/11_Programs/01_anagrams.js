// Program to check if two strings are anagrams or not

const checkAnagrams = (str1, str2) => {
  // If the lengths of the strings are not equal, they cannot be anagrams
  if (str1.length !== str2.length) {
    return false;
  }

  // Convert the both the strings to lower case and split them into arrays
  const arr1 = str1.toLowerCase().split("");
  const arr2 = str2.toLowerCase().split("");

  // Use hashmap to store the frequency of each character in str1
  const map = new Map();
  for (let element of arr1) {
    map.set(element, (map.get(element) || 0) + 1);
  }

  // Subtract the frequency of each character in str2 from hashmap
  for (let i = 0; i < arr2.length; i++) {
    map.set(arr2[i], (map.get(arr2[i]) || 0) - 1);
  }

  // If all the values in the hashmap are 0, they are anagrams
  for (let [, value] of map) {
    if (value !== 0) {
      return false;
    }
  }

  // Else they are not anagrams
  return true;
};

console.log(checkAnagrams("hello", "olleh")); // true
console.log(checkAnagrams("hello", "helloo")); // false
