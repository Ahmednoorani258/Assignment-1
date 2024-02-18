// Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

let city_country=(city:string,country:string):string =>//arrow function
{
    return`${city},${country}`;
}

console.log(city_country("karachi","pakistan"))
console.log(city_country("lahore","pakistan"))
console.log(city_country("mumbai","india"))