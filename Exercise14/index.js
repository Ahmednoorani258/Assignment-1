"use strict";
// If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guestlist = [
    "Ahmed",
    "Obaid",
    "Owais",
    "Muhammada Asif"
];
guestlist.forEach((guestname) => {
    console.log(`Dear ${guestname} you r invited to dinner`);
});
