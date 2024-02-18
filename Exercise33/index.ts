// Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

let numbers:number[]=[1,2,3,4,5,6,7,8,9];

// • Loop through the array.

for(const number of numbers){
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
    
    let ordinal:string;
    if(number === 1){
        ordinal ="st"
    }else if(number === 2){
        ordinal = "nd"
    }else if(number === 3){
        ordinal = "rd"
    }else{
        ordinal = "th"
    }

    console.log(`${number}${ordinal}`)
    
}

