"use strict";
// Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(nameofcity, nameofcountry = "(undefined)") {
    console.log(`${nameofcity} is in ${nameofcountry}`);
}
describe_city("Karachi", "Pakistan");
describe_city("Mumbai", "India");
describe_city("Lahore"); //here i didnot enter country bcs its undefined
