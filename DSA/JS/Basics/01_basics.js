// word (a, b) vs keyword (if, for)

// var vs let vs const

// hoisting (works with var, not with let)

a = 4;
console.log(a);
var a = 5;

// undefined -> the variable is there, but its value we don't know
// not-defined -> the variable is not there, It's not defined

// Types in JS
// Primitive - If we copy then only the value is copied not reference
// Reference [], {}, () - If we copy then a reference is copied, not the actual value
// Brackets means reference, no brackets means primitive

var arr = [12, 13];
var brr = arr;

brr.pop();
//arr will also change here cause of pop of brr
console.log(arr, brr); // [12] [12] // Both are same cause reference is copied

// Primitive
var a1 = 5;
var b1 = a1;
b1 = 7;
//a1 won't change here
console.log(a1, b1); // 5 7 // Both are different cause value is copied not reference

if (-1) {
  console.log("I am true");
}
