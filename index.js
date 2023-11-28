// Part 1: Fizz Buzz
//Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number

let num = 1;

while (num <= 100) {
    if (num % 15 === 0) {
        console.log('Fizz Buzz.');
    } else if (num % 3 === 0) {
        console.log('Fizz.');
    } else if (num % 5 === 0) {
        console.log('Buzz.');
    } else {
        console.log(num);
    }

    num++;
}