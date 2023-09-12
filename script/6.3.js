// Create a program that will re-use the Rectangle class you created previously. It should generate 1000 random instances of Rectangle with random positions and sizes. Then it will display all colliding rectangles amongst those that were generated that way.

// -----------------------------------------------------------------------

class Rectangle {

    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    collides(otherRectangle) {

        if ((
            ((this.topLeftXPos + this.length) < otherRectangle.topLeftXPos)
            ||
            (this.topLeftXPos > (otherRectangle.topLeftXPos + otherRectangle.length))
            ||
            (this.topLeftYPos < (otherRectangle.topLeftYPos - otherRectangle.width))
            ||
            ((this.topLeftYPos - this.width) > otherRectangle.topLeftYPos)
        )) {
            return false;
        }
        else {
            return true;
        }
        
    }
}



/**
 * Generates a random sign followed by a random number between -50 and +50.
 * @returns {number} A random number between -50 and +50.
 */
let randomPosition = () => {
    let sign = (Math.ceil(Math.random() * 2) === 1) ? '+' : '-'; 
    return Math.ceil(Math.random() * parseInt(`${sign}50`));
}

/**
 * Generates a random sign followed by a random number between -100 and +100.
 * @returns {number} A random number between -100 and +100.
 */
let randomSize = (minmax) => {
    return Math.ceil(Math.random() * minmax);
}




// Generate 1 random Rectangle instance with random positions and sizes to serve as a reference
let topLeftXPosRandom = randomPosition();
let topLeftYPosRandom = randomPosition();

let widthRandom = randomSize(25);
let lengthRandom = randomSize(20);

let initialRectangle = new Rectangle(topLeftXPosRandom, topLeftYPosRandom, widthRandom, lengthRandom);
console.warn('initialRectangle : ', initialRectangle);



// Generate 1000 random instances of Rectangle with random positions and sizes
let i = 1;
let rectangles = [];
// TODO: remplacer par :   while (i < 1001) {
while (i < 1001) {

    let topLeftXPosRandom = randomPosition();
    let topLeftYPosRandom = randomPosition();

    let widthRandom = randomSize(25);
    let lengthRandom = randomSize(20);

    let rectangle = new Rectangle(topLeftXPosRandom, topLeftYPosRandom, widthRandom, lengthRandom);

    rectangles = [...rectangles, rectangle]; 

    i++;
}
console.warn('rectangles : ', rectangles);




// Display all rectangles colliding with the reference rectangle (initialRectange), among the 1000 that have been generated
let collisions = 0;
let j = 1;
for (let rectangle of rectangles) {
    if (rectangle.collides(initialRectangle) === true) {
        console.log(`rectangle ${j} : `, rectangle);
        collisions++;
    }
    j++;
}
console.warn('Nombres de rectangles en collision avec le rectangle de référence : ', collisions);





// // Display all colliding rectangles amongst those that were generated
// let collisions = 0;
// for (let i = 0; i < 1001; i++) {
//     for (let j = (i + 1); j < 1000; j++) {
//         if (rectangles[i].collides(rectangles[j]) === true) {
//             console.warn(`rectangle ${i + 1} : `, rectangles[i]);
//             console.log(`rectangle ${j + 1} : `, rectangles[j]);
//             collisions++;
//         }
//     }
// }
// console.warn('Nombres de rectangles en collision avec le rectangle de référence : ', collisions);
