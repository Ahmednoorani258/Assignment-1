"use strict";
// You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
const str1 = "Ahmed";
const str2 = "ahemd";
console.log(str1 === str2); //false
console.log(str1 !== str2); //true
// • Tests using the lower case function
const text1 = "Ahmed nooraNi";
const text2 = "ahemd noorani";
console.log(text1.toLowerCase() === text2); //true
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 20;
let num2 = 10;
console.log(num1 === num2); //false
console.log(num1 !== num2); //true
console.log(num1 > num2); //true
console.log(num1 < num2); //false
console.log(num1 <= num2); //false
console.log(num1 >= num2); //true
// • Tests using "and" and "or" operators
let a = 5;
let b = 10;
let c = 15;
console.log(a < b && b < c); //true
console.log(a < b || b > c); //true
console.log(a > b && b < c); //false
console.log(a > b || b > c); //false
// • Test whether an item is in a array
const mobiles = ['samsung', 'iphone,', 'qmobile'];
console.log(mobiles.includes('techno')); //false
// • Test whether an item is not in a array
