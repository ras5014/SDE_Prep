const fizzbuzz = (num) => {
  let str = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      str.push("FizzBuzz");
    } else if (i % 3 === 0) {
      str.push("Fizz");
    } else if (i % 5 === 0) {
      str.push("Buzz");
    } else {
      str.push(i + "");
    }
  }
  return str;
};

const result = fizzbuzz(3);
console.log(result);
