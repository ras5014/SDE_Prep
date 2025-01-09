// Description: This file contains the code to check if a string is a palindrome.

// JavaScript program to check if a string is a palindrome
// Approach:
// Reverse the string and check if it is equal to the original string
const isPalindrome = (str) => str.split("").reverse().join("") === str;

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));

// Universal Solution
const isPlaindrome1 = (str) => {
  const arr = str.split("");
  let start = 0,
    end = arr.length - 1;
  while (start < end) {
    if (arr[start] !== arr[end]) {
      return false;
    } else {
      start++;
      end--;
    }
    return true;
  }
};
console.log(isPlaindrome1("racecar"));
console.log(isPlaindrome1("hello"));
