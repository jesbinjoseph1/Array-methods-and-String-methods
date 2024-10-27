// stringMethods
let str = "Hello, World!";
// 1. concat:Joins two or more strings into one.
console.log("1. concat");
let greeting = "Hello".concat(", ", "world!");
console.log(greeting);

// 2. includes:Checks if a string contains a specified substring.
console.log("\n2. includes");
console.log(str.includes("World")); 

// 3. indexOf:Returns the index of the first occurrence of a specified value.
let phrase = "The quick brown fox jumps over the lazy dog.";
console.log("\n3. indexOf");
console.log(phrase.indexOf("quick"));

// 4. lastIndexOf:Returns the index of the last occurrence of a specified value.
console.log("\n4. lastIndexOf");
console.log(phrase.lastIndexOf("the"));

// 5. padEnd:Pads the end of a string with a specified character up to a specified length.
console.log("\n5. padEnd");
console.log(str.padEnd(20, "*"));

// 6. padStart:Pads the start of a string with a specified character up to a specified length.
console.log("\n6. padStart");
console.log(str.padStart(20, "*"));

// 7. repeat:Repeats the string a specified number of times.
console.log("\n7. repeat");
console.log("abc".repeat(3));

// 8. replace:Replaces the first match of a substring with a new substring.
console.log("\n8. replace");
let newStr = str.replace("World", "JavaScript");
console.log(newStr);

// 9. search:Finds the index of the first occurrence of a specified value using regex.
console.log("\n9. search");
console.log(phrase.search("fox"));

// 10. slice:Extracts a section of a string based on start and end indices.
console.log("\n10. slice");
console.log(phrase.slice(4, 9));

// 11. split:Splits a string into an array based on a specified separator.
console.log("\n11. split");
console.log(phrase.split(" "));

// 12. startsWith:Checks if the string starts with the specified characters.
console.log("\n12. startsWith");
console.log(phrase.startsWith("The"));

// 13. substr:Extracts a substring from a start index and specified length.
console.log("\n13. substr");
console.log(phrase.substr(4, 5));

// 14. substring:Extracts characters from start index to end index.
console.log("\n14. substring");
console.log(phrase.substring(4, 9));

// 15. toLowerCase:Converts the entire string to lowercase letters.
console.log("\n15. toLowerCase");
console.log(str.toLowerCase());

// 16. toUpperCase:Converts the entire string to uppercase letters.
console.log("\n16. toUpperCase");
console.log(str.toUpperCase());

// 17. trim:Removes whitespace from both sides of a string.
let text = "   JavaScript is fun.   ";
console.log("\n17. trim");
console.log(text.trim());

// 18. trimEnd (or trimRight):Removes whitespace from the end of a string.
console.log("\n18. trimEnd");
console.log(text.trimEnd());

// 19. trimStart (or trimLeft):Removes whitespace from the beginning of a string.
console.log("\n19. trimStart");
console.log(text.trimStart());

// 20. charAt:Returns the character at a specified index.
console.log("\n20. charAt");
console.log(str.charAt(7));

// 21. charCodeAt:Returns the Unicode value of the character at a specified index.
console.log("\n21. charCodeAt");
console.log(str.charCodeAt(7));
