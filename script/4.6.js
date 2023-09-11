// Create a function factorial(a) that returns the factorial of a number.

// That function must be recursive.


// -----------------------------------------


let number = parseInt(prompt('Entrer un nombre :'))

let result = 1;
let factorial = (a) => {
    if (a > 0) {
        result *= a; 
        factorial(a - 1);
        return result;
    }
}

alert(number + '! = ' + factorial(number));