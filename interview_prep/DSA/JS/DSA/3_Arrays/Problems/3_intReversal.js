// JavaScript function that reverses an integer value
const reverseInt = (num) => {
  const reversed = num.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(num);
};

const num = reverseInt(-12345);

console.log(num, typeof num);
