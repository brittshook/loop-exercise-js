// Part 1: Fizz Buzz

// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number

let FizzBuzzNum = 1;

while (FizzBuzzNum <= 100) {
    if (FizzBuzzNum % 15 === 0) {
        console.log('Fizz Buzz.');
    } else if (FizzBuzzNum % 3 === 0) {
        console.log('Fizz.');
    } else if (FizzBuzzNum % 5 === 0) {
        console.log('Buzz.');
    } else {
        console.log(FizzBuzzNum);
    }

    FizzBuzzNum++;
};

// Part 2: Prime Time

// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop

let primeSearchNum = 300;

while (primeSearchNum > 0) {
    let factors = 0;
    let i = 1;
    
    while (i <= primeSearchNum) {   
        if (primeSearchNum % i === 0) {
            factors++;
        };

        i++
    };

    if (factors === 2) {
        console.log(primeSearchNum);
        break;
    }

    primeSearchNum++;
}

// Part 3: Feeling Loopy

// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”

const str = 'Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232';

let rows = str.split('\n'); 

for (const row of rows) {
    let cells = row.split(',');
    console.log(cells[0], cells[1], cells[2], cells[3]);
};