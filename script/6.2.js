// Create a class name Rectangle with attributes topLeftXPos, topLeftYPos, width and length. Add a method named collides(otherRectangle) that returns true only if the current rectangle collides with otherRectangle.

// Test the collides(otherRectangle) method by using multiple test cases.


// ----------------------------------------------------------------------

// VERSION 1 :   if...else if...
//               avec console.log() pour vérifier les conditions

// class Rectangle {
//     constructor(topLeftXPos, topLeftYPos, width, length) {
//         this.topLeftXPos = topLeftXPos;
//         this.topLeftYPos = topLeftYPos;
//         this.width = width;
//         this.length = length;
//     }
//     collides(otherRectangle) {

//         if ((this.topLeftXPos + this.length) < otherRectangle.topLeftXPos) {
//             // Vérifier si le rectangle1 est à droite de initialRectangle

//             console.log('this.topLeftXPos', this.topLeftXPos);
//             console.log('length', this.length);
//             console.log('this.topLeftXPos + this.length', this.topLeftXPos + this.length);
//             console.log('otherRectangle.topLeftXPos', otherRectangle.topLeftXPos);
//             console.log('pas de collision ' , (this.topLeftXPos + length) < otherRectangle.topLeftXPos);

//             return;
//         }
//         else if (this.topLeftXPos > (otherRectangle.topLeftXPos + otherRectangle.length)) {
//             // Vérifier si le rectangle1 est à gauche de initialRectangle

//             console.log('this.topLeftXPos', this.topLeftXPos);
//             console.log('otherRectangle.topLeftXPos', otherRectangle.topLeftXPos);
//             console.log('otherRectangle.length', otherRectangle.length);
//             console.log('otherRectangle.topLeftXPos + otherRectangle.length', otherRectangle.topLeftXPos + otherRectangle.length);
//             console.log('pas de collision ' , this.topLeftXPos > (otherRectangle.topLeftXPos + otherRectangle.length));

//             return;
//         }
//         else if (this.topLeftYPos < (otherRectangle.topLeftYPos - otherRectangle.width)) {
//             // Vérifier si le rectangle1 est au-dessus de initialRectangle
            
//             console.log('this.topLeftYPos', this.topLeftYPos);
//             console.log('otherRectangle.topLeftYPos', otherRectangle.topLeftYPos);
//             console.log('otherRectangle.width', otherRectangle.width);
//             console.log('otherRectangle.topLeftYPos + otherRectangle.width', otherRectangle.topLeftYPos - otherRectangle.width);
//             console.log('pas de collision ' , this.topLeftYPos < (otherRectangle.topLeftYPos - otherRectangle.width));

//             return;
//         }
//         else if ((this.topLeftYPos - this.width) > otherRectangle.topLeftYPos) {
//             // Vérifier si le rectangle1 est en-dessous de initialRectangle

//             console.log('this.topLeftYPos', this.topLeftYPos);
//             console.log('this.width', this.width);
//             console.log('this.topLeftYPos - this.width', this.topLeftYPos - this.width);
//             console.log('otherRectangle.topLeftYPos', otherRectangle.topLeftYPos);
//             console.log('pas de collision ' , (this.topLeftYPos - this.width) > otherRectangle.topLeftYPos);

//             return;
//         }
//         else {
//             console.log('collision');
//             return true;
//         }
//     }
// }

// --------------------------------------------------------------

// VERSION 1 :   if...else if...
//               sans console.log()

// class Rectangle {

//     constructor(topLeftXPos, topLeftYPos, width, length) {
//         this.topLeftXPos = topLeftXPos;
//         this.topLeftYPos = topLeftYPos;
//         this.width = width;
//         this.length = length;
//     }

//     collides(otherRectangle) {

//         if ((this.topLeftXPos + this.length) < otherRectangle.topLeftXPos) {
//             // Vérifier si le rectangle1 est à droite de initialRectangle
//             return console.log(false);
//         }
//         else if (this.topLeftXPos > (otherRectangle.topLeftXPos + otherRectangle.length)) {
//             // Vérifier si le rectangle1 est à gauche de initialRectangle
//             return console.log(false);
//         }
//         else if (this.topLeftYPos < (otherRectangle.topLeftYPos - otherRectangle.width)) {
//             // Vérifier si le rectangle1 est au-dessus de initialRectangle
//             return console.log(false);
//         }
//         else if ((this.topLeftYPos - this.width) > otherRectangle.topLeftYPos) {
//             // Vérifier si le rectangle1 est en-dessous de initialRectangle
//             return console.log(false);
//         }
//         else {
//             return console.log(true);
//         }
//     }
// }



// ----------------------------------------------------------------

// VERSION 2 : avec un if...else 

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
            return console.log(false);
        }
        else {
            return console.log(true);
        }
        
    }
}



// ------------------------------------------------------------


let initialRectangle = new Rectangle(0, 2, 2, 4);

// Rectangle à DROITE de initialRectangle
let rectangle1 = new Rectangle(6, 3, 3, 2);
console.warn('rectangle1');
initialRectangle.collides(rectangle1);

// Rectangle à GAUCHE de initialRectangle
let rectangle2 = new Rectangle(-10, 0, 4, 5);
console.warn('rectangle2');
initialRectangle.collides(rectangle2);

// Rectangle à AU-DESSUS de initialRectangle
let rectangle3 = new Rectangle(-1, 7, 3, 4);
console.warn('rectangle3');
initialRectangle.collides(rectangle3);

// Rectangle à EN-DESSOUS de initialRectangle
let rectangle4 = new Rectangle(-1, -1, 3, 2);
console.warn('rectangle4');
initialRectangle.collides(rectangle4);

// Rectangle EN COLLISION avec initialRectangle
let rectangle6 = new Rectangle(3, 3, 2, 3);
console.warn('rectangle6');
initialRectangle.collides(rectangle6);