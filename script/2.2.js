// // Ask the user to enter three numbers: min, max and current. Display if current is between min and max.

// let min = prompt('Minimum number :');
// let max = prompt('Maximum number :');
// let current = prompt('Current number :');

// if ((current > min) && (current < max)) {
//     alert('Number between min and max');
// }
// else {
//     alert('Number NOT between min and max');
// }

// --------------------------------------------------------------------------------------

// // Bonus: if min is greater than max, display an error message to explain the user he's doesn't understand anything then exit the program. (It must not ask any other question.)

// let min = prompt('Minimum number :');
// let max = prompt('Maximum number :');

// if ((min > max)) {
//     alert('You doesn\'t understand anything !')
// }
// else {
//     let current = prompt('Current number :');
//     if ((current > min) && (current < max)) {
//         alert('Number between min and max');
//     }
//     else {
//         alert('Number NOT between min and max');
//     }
// }


// --------------------------------------------------------------------------------------

// // Bonus 2: be polite in the error messages. (facultative)

// let min = prompt('Minimum number :');
// let max = prompt('Maximum number :');

// if ((min > max)) {
//     alert("Your 'min' value cannot be greater than 'max'. Please review the instructions.");
// }
// else {
//     let current = prompt('Current number :');
//     if ((current > min) && (current < max)) {
//         alert('Number between min and max');
//     }
//     else {
//         alert('Number NOT between min and max');
//     }
// }



// ----------------

do {
    if (isNaN(min) || isNaN(max)) {
        alert('Please enter valid numbers');
        min = parseInt(prompt('Enter the minimum number:'));
        max = parseInt(prompt('Enter the maximum number:'));
    }
    else if (min > max) {
        alert("Your 'min' value cannot be greater than 'max'");
        min = parseInt(prompt('Enter the minimum number:'));
        max = parseInt(prompt('Enter the maximum number:'));
    }
} 
while (isNaN(min) || isNaN(max) || (min > max))


do {
    alert('Please enter valid number');
    current = parseInt(prompt('Enter the current number:'));
}
while (isNaN(current))


let text = 
    (current >= min && current <= max) ? 
    'Number is between min and max' : 
    'Number is NOT between min and max';


alert(text);








