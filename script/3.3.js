// Write a program that will create a duplicate of a given array.

// Bonus: make a first version that will only do it using push(). Make a second version that uses a single method call to perform the copy. (You'll have to search on MDN or Google for this one.)


// --------------------------------------------

let numbers1 = [0, 5, 10, 15, 20, 25];
let copy1 = [];

for (let number of numbers1) {
    copy1.push(number);
}

console.log('numbers1 : ', numbers1);
console.log('copy1 : ', copy1);

// --------------------------------------------

let numbers2 = [0, 3, 6, 9, 12, 15];
let copy2 = [];

for (let number of numbers2) {
    copy2 = [...numbers2];
}

console.log('numbers2 : ', numbers2);
console.log('copy2 : ', copy2);