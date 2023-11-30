const {Triangle, Circle, Square} = require('../lib/shapes');

describe('Shapes', () => {
  describe('Triangle', () => {
    it('should render the correct SVG string with the specified color', () => {
      const shape = new Triangle();
      shape.setColor('blue');
      const svgString = shape.render();
      expect(svgString).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  });

  describe('Circle', () => {
    it('should render the correct SVG string with the specified color', () => {
      const shape = new Circle();
      shape.setColor('red');
      const svgString = shape.render();
      expect(svgString).toEqual('<circle cx="100" cy="100" r="50" fill="red" />');
    });
  });

  describe('Square', () => {
    it('should render the correct SVG string with the specified color', () => {
      const shape = new Square();
      shape.setColor('green');
      const svgString = shape.render();
      expect(svgString).toEqual('<rect width="100" height="100" fill="green" />');
    });
  });
});
