// Part 1: Fizz Buzz
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number

// let FizzBuzzNum = 1;

// while (FizzBuzzNum <= 100) {
//     if (FizzBuzzNum % 15 === 0) {
//         console.log('Fizz Buzz.');
//     } else if (FizzBuzzNum % 3 === 0) {
//         console.log('Fizz.');
//     } else if (FizzBuzzNum % 5 === 0) {
//         console.log('Buzz.');
//     } else {
//         console.log(FizzBuzzNum);
//     }

//     FizzBuzzNum++;
// };

// Part 2: Prime Time
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