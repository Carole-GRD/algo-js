// By reusing the function rand10() created in Exercise 2, write a function named multiRand(n) that returns an array of n numbers between 1 and 10. You should not modify anything in rand10() to achieve this.

// Write a documentation for the multiRand(n) function.

// Use that function to create a program that will ask the number of random numbers to generate then display that same number of random numbers.


// --------------------------------------------------------

/**
 * Generates a random integer between 1 and 10 (inclusive).
 * @returns {number} A random integer between 1 and 10 (inclusive).
 */
let rand10 = () => Math.ceil(Math.random() * 10);



/**
 * Generates an array of 'n' random integers between 1 and 10 (inclusive).
 * @param {number} n - The number of random integers to generate.
 * @returns {number[]} An array of 'n' random integers between 1 and 10 (inclusive).
 */
let multiRand = (n) => {
    let arr = [];
    let i = 1;
    while (i <= n) {
        let num = rand10();
        arr = [...arr, num];
        i++;
    }
    return arr;
}


let howManyNumbers = parseInt(prompt('Combien de nombres dans le tableau ?'));
alert(multiRand(howManyNumbers));
// console.log(multiRand(howManyNumbers));