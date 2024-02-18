"use strict";
// Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magiciansnames = ["Criss Angel", "David Copperfield", "David Blaine"];
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
show_magicians(magiciansnames);
function make_great(magicians) {
    let greatmagicians = magicians.map(magician => `the great ${magician}`);
    return greatmagicians;
}
//modifying the aray to add the great with magician
let greatmagiciansnames = make_great(magiciansnames);
show_magicians(magiciansnames);
console.log("\ngreat magicians");
show_magicians(greatmagiciansnames);
