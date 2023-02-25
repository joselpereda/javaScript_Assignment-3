// Define global variables
let currentNumber = 1;
let numIterations = 100;

do {
    // First, check if number is a multiple of 3
    // If true, write "Marco!" to the the console
    if (currentNumber % 3 === 0) {
        console.log("Marco!");
    
    // Second, check if number is a multiple of 5
    // If true, write "Polo!" to the console
    } else if (currentNumber % 5 === 0) {
        console.log("Polo!");
    
    // Third, check if number is multipe of 3 and 5
    // If true, write "Marco! Polo!" to the console
    } else if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
        console.log("Marco! Polo!");

    // Otherwise simply write the current number to the console
    } else {
        console.log(currentNumber);
    }

    // Increment current number by 1
    currentNumber++;

// Continue looping until currentNumber reaches 100, then exit
} while (currentNumber <= numIterations);