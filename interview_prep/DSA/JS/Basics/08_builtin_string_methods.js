// All string methods returns a new string without changing the original string

// Substring
const str1 = "Ramananda";
console.log(str1.substring(1, 3)); // am (1 to 3-1)

// Slice (Supports negative indexes)
const str2 = "Ramananda";
console.log(str2.slice(0, -1)); // Ramanand (0 to lastindex-1)
// To Print Entire String using slice "str2.slice(0,) or str2.slice()"

/*
    The split(separator) splits a string into an array of substrings based on the separator.
        - If the separator is not provided, it returns a single-element array containing the whole string.
        - If the separator is "", it returns an array of strings, each having a single character.
*/

const myStr = "Educative";
console.log(myStr.split("")); // ["E", "d", "u", "c", "a", "t", "i", "v", "e";

// CASE chnages
const myName = "Ramananda";
console.log(myName.toUpperCase()); // RAMANANDA
console.log(myName.toLowerCase()); // ramananda

/*
    The search-related methods

        - These methods search for the occurrence of text in a string. Let’s use an example program to explore searches.

        - The startsWith() method checks for text at the start of a string and returns true or false.

        - The charAt() method gives the text at the specified position in the string.

        - The search() method searches for text in the string and returns the index of the first occurrence.

        - The trim() method eliminates the extra spaces from a string only from start and end not from middle.

        - The replace() method searches for first occurrences of a text in the string, replaces it with different text, and returns the new string after replacement.

        - The replaceAll() method searches for all occurrences of a text in the string, replaces it with different text, and returns the new string after replacement.

        - The endsWith() method checks for text at the end of a string and returns true or false.
*/

// startsWith
const myName1 = "Ramananda";
console.log(myName1.startsWith("Ram")); // Output: true (T.C. - O(1))

// endsWith
const myName2 = "Ramananda";
console.log(myName2.endsWith("nda")); // Output: true (T.C. - O(2))

// charAt
const myName3 = "Ramananda";
console.log(myName3.charAt(0)); // Output: R (T.C. - O(1))

// search (Gives the 1st occurrence index)
const myName4 = "Ramananda";
console.log(myName4.search("a")); // Output: 1 (-1 if not found) (T.C. - O(n))

// trim (Removes extra spaces from both sides)
const myName5 = " Ramananda ";
console.log(myName5.trim()); // Output: Ramananda (T.C. - O(n))

// replace (Only 1st occurrence will be replaced & Can replace words too like here I can replace Ram with Shyam)
const myName6 = "Ramananda";
console.log(myName6.replace("a", "e")); // Output: Remananda (T.C. - O(n))

// replaceAll (All occurrences will be replaced)
const myName7 = "Ramananda";
console.log(myName7.replaceAll("a", "e")); // Output: Remanende (T.C. - O(n))

// includes
const myName8 = "Ramananda";
console.log(myName8.includes("a")); // Output: true (T.C. - O(n))
