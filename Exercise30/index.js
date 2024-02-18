"use strict";
// Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
let usernames = ['Noman', 'admin', 'Ahmed', 'Naveed', 'Lukman'];
for (let i in usernames) {
    // • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
    if (usernames[i] === 'admin') {
        console.log('hello admin would u like to see a status report');
    }
    else {
        // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again
        console.log(`hello ${usernames[i]}thank u for logging in again`);
    }
}
