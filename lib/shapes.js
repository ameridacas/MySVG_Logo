// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

class Shape {
    constructor() {
      this.color = 'black'; // Default color
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      throw new Error('Render method must be used from the class');
    }
  }
  
  module.exports = Shape;
  










// Exports `Triangle`, `Circle`, and `Square` classes
module.exports = {Circle, Square, Triangle};