"use strict";
// Store a person’s name in a variable, and then print that person’s
//  name in lowercase, uppercase, and titlecase.
let personname = "muhammad ahmed noorani";
let lowercase = personname.toLowerCase();
console.log(lowercase);
let uppercase = personname.toUpperCase();
console.log(uppercase);
let word = personname.split(" ");
let titlecase = "";
for (let i = 0; i < word.length; i++) {
    titlecase += word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase() + " ";
}
console.log(titlecase);
