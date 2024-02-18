// Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

let alien_color:string = "Green"

// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

if(alien_color == "Green"){
    console.log("Congratulation u have earned 5 points")
}

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.

alien_color = "orange"

if(alien_color == "green"){
    console.log("Congratulation u have earned 5 points")
}