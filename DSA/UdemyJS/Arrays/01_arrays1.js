const s = ["a", "b", "c"];
console.log("Printing the String: ", s);

// push (Add an element to the end of the array) -> O(1)
s.push("d");
console.log("After Pushing 'd': ", s);

// pop (Remove an element from the end of the array & return that element) -> O(1)
console.log("Poped Element: ", s.pop());
console.log("After Pop: ", s);

// Unshift (Add an element to the start of the array) -> O(n)
s.unshift("x");
console.log("After Unshift 'x': ", s);

// Splice (Add/Remove an element from the middle of the array) -> O(n)
s.splice(2, 0, "alien");
console.log("After Splice: ", s);
