"use strict";
// Think of at least five places in the world you’d like to visit.
// step 1 • Store the locations in a array. Make sure the array is not in alphabetical order.
console.log("\nits order has been cahnged");
let travellocation = ["Tokyo", "Dubai", "Paris", "London", "U.K"];
// Step 2 • Print your array in its original order.
console.log("\nits order has been cahnged to original order");
console.log(travellocation);
// Step 3• Print your array in alphabetical order without modifying the actual list.
console.log("\nits order has been cahnged to alphabetical order");
console.log([...travellocation].sort());
// Step 4• Show that your array is still in its original order by printing it.
console.log("\nits order has been cahnged");
console.log(travellocation);
//Step 5 • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\nits order has been cahnged");
console.log([...travellocation].sort().reverse());
//Step 6 • Show that your array is still in its original order by printing it again.
console.log("\nits order has been cahnged");
console.log(travellocation);
//step 7 • Reverse the order of your list. Print the array to show that its order has changed.
console.log("\nits order has been cahnged");
travellocation.reverse();
console.log(travellocation);
// step 8• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\nits order has been cahnged");
travellocation.reverse();
console.log(travellocation);
//step 9 • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\nits order has been cahnged");
travellocation.sort();
console.log(travellocation);
//step 10 • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\nits order has been changed to alphabetical order ");
travellocation.sort().reverse();
console.log(travellocation);
