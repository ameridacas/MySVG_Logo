const { Triangle, Circle, Rectangle } = require('../lib/shapes');

describe('Shapes', () => {
    describe('Triangle', () => {
        it('should render the correct SVG string with the specified color', () => {
            const shape = new Triangle();
            shape.setColor('red');
            const svg = shape.render();
            expect(svg).toEqual('<polygon points="100,50 250,50 175,150" fill="red" />');
        });
    });

    describe('Circle', () => {
        it('should render the correct SVG string with the specified color', () => {
            const shape = new Circle();
            shape.setColor('green');
            const svg = shape.render();
            expect(svg).toEqual('<circle cx="150" cy="100" r="80" fill="green"/>');
        });
    });

    describe('Rectangle', () => {
        it('should render the correct SVG string with the specified color', () => {
            const shape = new Rectangle();
            shape.setColor('purple');
            const svg = shape.render();
            expect(svg).toEqual('<rect x="50" y="50" width="200" height="100" fill="purple" />');
        });
    });
});
