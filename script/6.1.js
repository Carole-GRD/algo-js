// Create a class named Circle with attributes xPos, yPos and radius. Add a method named move(xOffset, yOffset) that will adjust the position of the circle. Add a getter accessor named surface that will return the surface of the circle.

// Test its method and accessors by modifying the values and checking if everything is consistent.

class Circle {
    constructor (xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    move(xOffset, yOffset) {
        this.xPos = xOffset;
        this.yPos = yOffset;
    }
    get position() {
        return `(${circle1.xPos}, ${circle1.yPos})`;
    }
    get surface() {
        return  Math.round(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
    }
}

let circle1 = new Circle(5, 6, 10);

console.log(circle1.position);   // (5, 6)
console.log(circle1.radius);     // 10
console.log(circle1.surface);    // 314.16

circle1.move(12, 4);
console.log(circle1.position);   // (12, 4)

circle1.radius = 1;
console.log(circle1.radius);     // 1
console.log(circle1.surface);    // 3.14
