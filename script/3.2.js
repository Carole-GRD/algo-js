// Write a program that will calculate the average value of a given array.

// Test it with the following arrays:

    // [1, 2, 3, 4, 5] => 3
    // [100, 101, 102] => 101

// ---------------------------------------------------

console.warn('3.2.js');

let numbers1 = [1, 2, 3, 4, 5];

let sum1 = 0;
for (let number of numbers1) {
    sum1 += number;
}

let average1 = sum1 / numbers1.length;

console.log(average1);



// ---------------------------------------------------

let numbers2 = [100, 101, 102];

let sum2 = 0;
for (let number of numbers2) {
    sum2 += number;
}

let average2 = sum2 / numbers2.length;

console.log(average2);