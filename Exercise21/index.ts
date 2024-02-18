// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let rccar =
{
    name: "sports car",
    price : 1800,
    description: "remote control car toy"

}
let rccars: Array<typeof rccar> =[];

//pushing multiple object
rccars.push(rccar)
// rccars.push({name: "offroad car",price :2000 ,description:"remote control toy car special for off road"})
let rccars2 ={
    name: "speed car",
    price: 2500,
    description:"super fast toy rc car"
}

rccars.push(rccars2)

console.log(rccars)
