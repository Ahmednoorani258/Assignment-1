"use strict";
// Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals = ['dog', 'cat', 'rabbit'];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i]} would really a good pet`);
}
console.log("\nthese three animals are suitable for make a pet bcs they have emotions and specially the dog i really like to have a pet");
