// Declare global variables
let coinFlip;

// Prompt user how many times to execute loop
let  cycleTimes = parseInt(prompt("How many times do you want to play flip the coin?"));

for (i = 0 ; i < cycleTimes; i++ ) {
    // Determine the result of the coin toss
    coinFlip = Math.round(Math.random());

    // If coin toss = 0, write "Heads" to the console
    if (coinFlip == 0) {
        console.log("Heads");

    // else, write "Tails" to the console    
    } else  {
        console.log("Tails");
    }
}