// Javascript program to reverse an array
const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("Hello"));
console.log(reverseString("Pilu"));

// Universal Solution
const reverseString1 = (str) => {
  const arr = str.split("");
  let start = 0,
    end = arr.length - 1;
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr.join("");
};
console.log(reverseString1("Hello"));
console.log(reverseString1("Pilu"));
