class Triangle {
    constructor() {
        this.color = 'red';
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Circle {
    constructor() {
        this.color = 'white';
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        return `<circle cx="100" cy="100" r="50" fill="${this.color}" />`;
    }
}

class Rectangle {
    constructor() {
        this.color = 'black';
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        return `<rect width="100" height="100" fill="${this.color}" />`;
    }
}

// Exports `Triangle`, `Circle`, and `Square` classes
module.exports = { Circle, Rectangle, Triangle };