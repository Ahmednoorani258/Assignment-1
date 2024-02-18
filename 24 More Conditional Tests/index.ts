// You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

const name1:string = "Ahmed";
const name2:string="ahemd";
console.log(name1 === name2);//false
console.log(name1 !== name2); //true

// • Tests using the lower case function

const text1:string = "Ahmed nooraNi";
const text2:string="ahemd noorani";
console.log(text1.toLowerCase()===text2);//true

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let num1:number= 20;
let num2:number= 10;

console.log(num1 === num2)//false
console.log(num1 !== num2)//true
console.log(num1 > num2)//true
console.log(num1 < num2)//false
console.log(num1 <= num2)//false
console.log(num1 >= num2)//true


// • Tests using "and" and "or" operators

let a:number=5;
let b:number=10;
let c:number=15;

console.log(a < b && b < c);//true
console.log(a < b || b > c)//true
console.log(a > b && b < c)//false
console.log(a > b || b > c)//false


// • Test whether an item is in a array

const mobiles:string[]=['samsung','iphone,','qmobile']
console.log(mobiles.includes('techno'));//false
console.log(mobiles.includes('iphone'));//true
// • Test whether an item is not in a array

console.log(!mobiles.includes('techno'));//true
console.log(!mobiles.includes('iphone'));//false

