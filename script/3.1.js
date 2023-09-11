// Write a program that will add all the elements of an array.

// Test it with the following arrays:

    // [1, 2, 3, 4, 5] => 15
    // [100, 101, 102] => 303

// ---------------------------------------------------

let numbers1 = [1, 2, 3, 4, 5];

let sum1 = 0;
for (let number of numbers1) {
    sum1 += number;
}
console.log(sum1);

// ---------------------------------------------------

let numbers2 = [100, 101, 102];

let sum2 = 0;
for (let number of numbers2) {
    sum2 += number;
}
console.log(sum2);