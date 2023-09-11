// Create a function named calcDistance which takes the coordinates of two different points A and B in a 2D space. That function must return the distance between those two points.

// Examples results:

    // Point A = [1, 1], point B = [2, 2] => 1.41
    // Point A = [1, 1], point B = [3, 1] => 2
    // Point A = [4, 1], point B = [1, 1] => 3
    // Point A = [-2, 2], point B = [2, -2] => 5.65

// Create a program to use that function.

// Write a documentation for the calcDistance function.

// Note: You probably need to make some search on Google to learn the mathematical formula to do that. You will also probably need to search for useful functions in JavaScript to help you making complex mathematical formulas...


// ------------------------------------------------------------------------------

/**
 * Calculates the Euclidean distance between two points.
 * @param {number[]} coordA - The coordinates of point A as [x, y].
 * @param {number[]} coordB - The coordinates of point B as [x, y].
 * @returns {number} The Euclidean distance between points A and B.
 */
let calcDistance = (coordA, coordB) => {
    // let result = Math.sqrt( ((coordB[0] - coordA[0]) ** 2) + ((coordB[1] - coordA[1]) ** 2) );
    let result = Math.sqrt( Math.pow( (coordB[0] - coordA[0]), 2) + Math.pow( (coordB[1] -coordA[1]), 2) );
    let display = Math.floor(result * 100) / 100;
    return display;
}


let pointA = [];
let pointB = [];

pointA.push(parseInt(prompt('Abscisse de A :')));
pointA.push(parseInt(prompt('Ordonnée de A :')));

pointB.push(parseInt(prompt('Abscisse de B :')));
pointB.push(parseInt(prompt('Ordonnée de B :')));

alert('Distance entre le point A et le point B : ' +  calcDistance(pointA, pointB));
// console.log('Distance entre le point A et le point B : ',  calcDistance(pointA, pointB));