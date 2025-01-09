// Basic types
let id: number = 5;
let company: string = "Apple";
let isActive: boolean = true;
let x: any = "hello";

// Array
let ids: number[] = [1, 2, 3, 4, 5];
ids.push(6);
console.log(ids);

// Tuple
let person: [number, string] = [1, "John"];

// Array of tuples
let persons: [number, string][] = [
  [1, "John"],
  [2, "Jane"],
  [3, "Bob"],
];
console.log(persons);
