// Store first n prime numbers in an array

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const storeFirstNPrime = (n, arr) => {
  for (let i = 0; i < n; i++) {
    // Check prime or not
    // if prime store in an array
    if (isPrime(i)) arr.push(i);
  }
};

const arr = [];
storeFirstNPrime(10, arr);
console.log(arr); // [2, 3, 5, 7]
