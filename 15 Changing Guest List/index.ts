// You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

let guestlist : Array<string>=[
    "Ahmed",
    "Obaid",
    "Owais",
    "Muhammad Asif"
];

// guestlist.forEach((guestname) =>
// {
//     console.log(`Dear ${guestname} you r invited to dinner`)
// })

//the name of person who cant make it

let guestwhocantmakeit:string= "Muhammad Asif"
console.log(`${guestwhocantmakeit} cant make it to dinner`)

// now i need to replace the name of guest who cant make it

let newguest:string="Kamran";
let idnexOfguestwhocantmakeit:number = guestlist.indexOf(guestwhocantmakeit)

// console.log(idnexOfguestwhocantmakeit)

if(idnexOfguestwhocantmakeit !== -1){
    guestlist[idnexOfguestwhocantmakeit]=newguest
}
// console.log(guestlist[3])

console.log("second set of invitation msg")
guestlist.forEach((guest:string)=>
{
    console.log(`dear, ${guest},you are invited to dinner `)

})

export{guestlist}


