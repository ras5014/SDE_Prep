// String Copy
let str1 = "Ramananda";
const str2 = str1.slice();
str1 = "RamanandaS";
console.log(str2);

// String Concatenation
const str3 = "Ramananda";
const str4 = "Samantaray";

console.log(str3 + " " + str4);

// Reverse String
let str5 = "Hello";
str5 = str5.split("");
let i = 0,
  j = str5.length - 1;

while (i < j) {
  [str5[i], str5[j]] = [str5[j], str5[i]];
  i++;
  j--;
}

console.log(str5.join(""));
