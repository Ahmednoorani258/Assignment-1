// Store a person’s name in a variable, and then print that person’s
//  name in lowercase, uppercase, and titlecase.

let personname:string="muhammad ahmed noorani"
let lowercase:string= personname .toLowerCase();

console.log(lowercase)

let uppercase:string= personname.toUpperCase();
console.log(uppercase)

//in title case ,first we need to split the sentece in to words,then we 
// need to apply loop for converting first word in to uppercase of evry word
// and then aply lower case to remaining character and then we get the title case
// sentecs in result

let word:string[]=personname.split(" ")
let titlecase:string=""
for(let i=0;i < word.length; i++){
    titlecase+=word [i].charAt(0).toUpperCase()+ word[i].slice(1).toLowerCase()+" " 
}
console.log(titlecase)