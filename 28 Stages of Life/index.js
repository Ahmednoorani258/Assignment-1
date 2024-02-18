"use strict";
// Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
let age = 66;
// • If the person is less than 2 years old, print a message that the person is a baby.
if (age <= 2) {
    console.log("U r Baby");
}
else if (
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
age <= 4) {
    console.log("U r toddler");
}
else if (
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
age <= 13) {
    console.log("U r kid");
}
else if (
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
age <= 20) {
    console.log("U r teenager");
}
else if (
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
age <= 65) {
    console.log("u r adult");
}
else
    (
    // • If the person is age 65 or older, print a message that the person is an elder
    console.log("u are elder"));
