"use strict";
// Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
let usernames = [];
if (usernames.length === 0) {
    console.log("we need to find some users");
}
else {
    let age = 66;
    if (age <= 2) {
        console.log("U r Baby");
    }
    else if (age <= 4) {
        console.log("U r toddler");
    }
    else if (age <= 13) {
        console.log("U r kid");
    }
    else if (age <= 20) {
        console.log("U r teenager");
    }
    else if (age <= 65) {
        console.log("u r adult");
    }
    else
        (console.log("u are elder"));
}
