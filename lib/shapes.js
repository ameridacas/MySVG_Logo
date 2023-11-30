class Triangle {
    constructor() {
        this.color = 'red';
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        return `<polygon points="100,50 250,50 175,150" fill="${this.color}" />`;
    }
}

class Circle {
    constructor() {
        this.color = 'green';
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Rectangle {
    constructor() {
        this.color = 'purple';
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        return `<rect x="50" y="50" width="200" height="100" fill="${this.color}" />`;
    }
}

// Exports `Triangle`, `Circle`, and `Square` classes
module.exports = { Circle, Rectangle, Triangle };