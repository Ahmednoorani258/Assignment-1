// /*Think of your favorite mode of transportation, such as a motorcycle or a car,  
// and make a list that stores several examples. Use your list to print a series of 
// statements about these items, such as “I would like to own a Honda motorcycle.”

let transportation: Array<[transport:string , brand:string]> = []

transportation.push(["Bike", "Unique"])
transportation.push(["Car", "Civic"])
transportation.push(["Rickshaw", "Sazgar"])

// here i m using loop for print the series of statement

transportation.forEach(([transport , brand])=>
{console.log(`I would like to own a ${brand} ${transport}`)})
