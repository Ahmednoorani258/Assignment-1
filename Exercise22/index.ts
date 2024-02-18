// If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

//to create a fruit object
function createfruit (name :string, colour:string, taste: string){
    return{
        name,
        colour,
        taste,
    };
}

// create an array of fruts

const fruits =[
    createfruit("apple","red","sweet"),
    createfruit("banana","yellow","sweet"),
    createfruit("orange","orange","sour")
]

// acces an invalid index
const invalidindex = 10;//there is only 3 in object but we write 10 so thats a error 
console.log(`fruit atindex${invalidindex}:`,fruits[invalidindex]);

// print the fruits with removing error

fruits.forEach((fruit)=>{
    console.log(`name:${fruit.name},colour:${fruit.colour},taste${fruit.taste}`);
})

export{};