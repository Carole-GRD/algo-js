// Create a function named rand10() that returns a random integer between 1 and 10. Create a program that will display the result of that function each time it is run.

// Write a documentation for the rand10() function.

// You will have to search on Google how to generate random numbers in JavaScript for this exercise.


// ---------------------------------------------------------

/**
 * Génère un nombre entier aléatoire entre 1 et 10 inclus.
 * @returns {number} Un nombre entier aléatoire entre 1 et 10 inclus.
 */
// let rand10 = () => Math.ceil(Math.random() * 10);

// console.log(rand10());

// ---------------------------------------------------------

/**
 * Generates a random integer between 1 and 10 (inclusive).
 * @returns {number} A random integer between 1 and 10 (inclusive).
 */
let rand10 = () => Math.ceil(Math.random() * 10);

console.log(rand10());
