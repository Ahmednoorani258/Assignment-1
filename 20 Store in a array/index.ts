// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let languages:string[]=["English","Urdu","Spanish","German"]
console.log("List of Languages")

for(let language of languages){
    console.log(`${language}`)
}