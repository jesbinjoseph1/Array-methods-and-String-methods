// arrayMethods

//  1.concat: Joins two or more arrays.
let arr= [1, 2, 3, 4, 5];
console.log("1. concat");
let newArr = arr.concat([6, 7, 8]);
console.log(newArr);

//  2.every: Checks if all elements pass a test.

console.log("\n2. every");
let isAllPositive = arr.every(num => num > 0);
console.log(isAllPositive);

// 3.fill: Replaces elements in an array with a static value.
console.log("\n3. fill");
let filledArr = arr.fill(0, 1, 3);
console.log(filledArr);

// 4.find: Returns the first element that passes a test.
console.log("\n4. find");
let foundItem = arr.find(num => num > 3);
console.log(foundItem); 

// 5.findIndex: Returns the index of the first element that passes a test.
console.log("\n5. findIndex");
let foundIndex = arr.findIndex(num => num > 3);
console.log(foundIndex);

// 6.flat: Flattens nested arrays.
console.log("\n6. flat");
let nestedArr = [1, [2, [3, 4]], 5];
console.log(nestedArr.flat(2));

// 7.includes: Checks if an array contains a certain value.
console.log("\n7. includes");
console.log(arr.includes(3));

// 8.indexOf: Returns the first index of a specified value.
let fruits = ["apple", "banana", "cherry"];
console.log("\n8. indexOf");
console.log(fruits.indexOf("banana"));

// 9.join: Joins all elements of an array into a string.
console.log("\n9. join");
console.log(fruits.join(", "));

// 10.lastIndexOf: Returns the last index of a specified value.
console.log("\n10. lastIndexOf");
console.log(fruits.lastIndexOf("banana"));

// 11.pop: Removes the last element.
console.log("\n11. pop");
arr.pop();
console.log(arr);

// 12.push: Adds an element to the end.
console.log("\n12. push");
arr.push(6);
console.log(arr);

// 13.reverse: Reverses the array in place.
console.log("\n13. reverse");
console.log(arr.reverse());

// 14. unshift: Adds elements to the beginning.
console.log("\n14. unshift");
arr.unshift(7);
console.log(arr);

// 15. shift: Removes the first element.
console.log("\n15. shift");
arr.shift();
console.log(arr);

// 16. slice: Returns a portion of an array.
console.log("\n16. slice");
console.log(arr.slice(1, 3));

// 17. some: Checks if any element passes a test.
console.log("\n17. some");
let hasEven = arr.some(num => num % 2 === 0);
console.log(hasEven);

// 18. sort: Sorts the array.
console.log("\n18. sort");
let unsortedArr = [3, 1, 4, 1, 5, 9];
console.log(unsortedArr.sort((a, b) => a - b));

// 19. splice: Adds/removes items at a specific index.
console.log("\n19. splice");
let splicedArr = arr.splice(2, 2, 8, 9);
console.log(arr);
console.log(splicedArr);

// 20. toString: Converts the array to a string.
console.log("\n20. toString");
console.log(arr.toString());

// 21. filter: Creates a new array with elements that pass a test.
console.log("\n21. filter");
let filteredArr = arr.filter(num => num > 5);
console.log(filteredArr);

// 22. reduce: Reduces array to a single value.
console.log("\n22. reduce");
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// 23. map: Creates a new array with the results of calling a function on each element.
console.log("\n23. map");
let doubledArr = arr.map(num => num * 2);
console.log(doubledArr);

// 24. forEach: Calls a function on each element in the array.
console.log("\n24. forEach");
arr.forEach((num, index) => console.log(`Index ${index}: ${num}`));