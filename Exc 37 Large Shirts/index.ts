// Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size:string,text:string):void{
    console.log(`Size = "${size}" \ntext = "${text}"`)

}

console.log("\n Printing Small shirt")
make_shirt("small","Noorani")
console.log("\n Printing medium shirt")
make_shirt("medium","this shirt is for youngsters")
console.log("\n Printing large shirt")
make_shirt("large","this is bagy shirt")
    