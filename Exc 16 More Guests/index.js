"use strict";
// You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestlist = [
    "Ahmed",
    "Obaid",
    "Owais",
    "Kamran"
];
let middleIndex = Math.floor(guestlist.length / 2);
guestlist.splice(middleIndex, 0, "Khurram");
// console.log(guestlist)
//now adding new guest in the list with unshift
guestlist.unshift("Nasir Khan");
// console.log(guestlist)
guestlist.push("Moiz Memon");
console.log("New set of Invitation messages");
for (let guest of guestlist) {
    console.log(`Assalamualaikum ${guest},U are invited to dinner`);
}
