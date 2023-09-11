// Create a function named calcSurface that takes the length and width of a rectangle and returns its surface. Then create a program that asks the length and width of a rectangle to the user then displays the surface of that rectangle. That program must use the function you created.

// Write a documentation for the calcSurface function.


// ------------------------------------------------------------

let a = 10;
let b = 6;
let surface = 0;

let calcSurface = (length, width) => {
    return surface = length * width;
}

console.log('calcSurface(a, b) : ', calcSurface(a, b));


let c = parseInt(prompt('Longueur : '));
let d = parseInt(prompt('Largeur : '));

alert(`calcSurface(${c}, ${d}) -> ${calcSurface(c, d)}`);