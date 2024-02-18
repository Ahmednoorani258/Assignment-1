"use strict";
// Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magiciansnames = ["Criss Angel", "David Copperfield", "David Blaine"];
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
