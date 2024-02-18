// Store a person’s name, and include some whitespace characters at the beginning and
// end of the name. Make sure you use each character combination, "\t" and "\n", at
// least once. Print the name once, so the whitespace around the name is displayed. 
// Then print the name after striping the white spaces.

let personname:string="\t     Muhammad Ahmed Noorani     \n";
console.log(personname)

let strippedname:string=personname.trim()
console.log(strippedname)
