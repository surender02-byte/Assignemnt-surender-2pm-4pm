// Create a base class Shape and a subclass Circle that calculates area.

class Shape {
    constructor() {
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();              
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

const c1 = new Circle(1);
console.log("Area of circle:", c1.calculateArea());
