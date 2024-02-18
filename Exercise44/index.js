"use strict";
// Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makesandwich(...items) {
    console.log("sandwich recipe items:");
    if (items.length === 0) {
        console.log("you ordered sadwich without items,Please add some");
    }
    else {
        items.forEach((item, index) => {
            console.log(`${index + 1},${item}`);
        });
    }
    console.log("\nEnjoy your sandwich!\n");
}
// calling function 3 times
console.log("\n[chicken sandwich]\n");
makesandwich("chicken", "Cheese", "Lettuce");
console.log("\n[plain sandwich]\n");
makesandwich("mayo", "egg", "cucumber");
console.log("\n[only bread ]\n");
makesandwich();
