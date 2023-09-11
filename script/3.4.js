// Write a program that will display the minimum and maximum elements of a given array.

// -------------------------------------

let numbers = [10, -5, -3, 2];

let min = numbers[0];
let max = numbers[0];

for (let number of numbers) {
    if (number < min) {
        min = number;
    }
    if (number > max) {
        max = number;
    }
}
console.log('Max : ', max);
console.log('Min : ', min);


// -------------------------------------


// let numbers = [10, -5, -12, 53];

// let max = Math.max(...numbers);
// let min =  Math.min(...numbers);

// console.log('Max : ', max);
// console.log('Min : ', min);