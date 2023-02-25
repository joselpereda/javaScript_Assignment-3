// Declare global variables
let coinFlip;

do {
    // Determine the result of the coin toss
    coinFlip = Math.round(Math.random());

    // If coin toss = 0, write "Heads" to the console
    if (coinFlip == 0) {
        console.log("Heads");

    // else coin toss = 1, write "Tails" to the console    
    } else {
        console.log("Tails");
    }
 
// check if coin toss = tails/1. If yes, exit the loop.    
} while (coinFlip !== 1);

// Add this statement to indicate program has ended
console.log("Jackpot! You've hit Tails.")