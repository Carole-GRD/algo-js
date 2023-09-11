// Make a program that ask the user to enter a number named n. Then ask him n time to enter a new number. At the end display the sum of all the numbers collected this way.

// Example: If the user enters 3 for n then 1, 2 and 3, the program should display 6.


// let n = parseInt(prompt('How many numbers do you want to add up ?'));
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//     sum += parseInt(prompt(`Number ${i} :`));
//     console.log(i);
//     console.log(sum);
// }

// alert(`Result : ${sum}`);




// Création d'un tableau pour stocker les nombres entrés et afficher le calcul
// -----------------------------------------------

let n = parseInt(prompt('How many numbers do you want to add up ?'));

// Create sum and array of numbers
let sum = 0;
let numbersTab = [];
let calcul = '';
for (let i = 1; i <= n; i++) {
    // Number input
    let value = parseInt(prompt(`Number ${i} :`));

    // Add number to sum
    sum += value;

    // Add number to table
    numbersTab = [...numbers, value];

    // Create calculation display 
    (i <= n) ? calcul += `${value} + ` : calcul += `${value} = `;
}

alert(calcul + sum);
