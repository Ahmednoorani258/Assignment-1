"use strict";
// Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function createCar(manufacturer, modelName, ...properties) {
    const car = {
        manufacturer,
        modelName,
    };
    for (let [key, value] of properties) {
        car[key] = value;
    }
    return car;
}
// Example usage
const myCar1 = createCar('Toyota', 'corolla', ["color", "red"], ["optionalfeature", "sunroof"]);
const mycar2 = createCar('honda', 'civic', ['engine', 'v8'], ['ligths', 'neon']);
console.log(myCar1);
console.log("\n");
console.log(mycar2);
