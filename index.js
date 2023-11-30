const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Rectangle } = require('./lib/shapes');//Runs the application using imports from lib/

class CreateSVG {
    constructor() {
        this.shapes = [];
        this.text = '';
    }

    addShape(shape, text) {
        this.shapes.push({ shape, text }); // Store both shape and text for each shape
        this.text = text;
    }

    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="300" width="300">${this.shapes.map(({ shape, text }) => shape.render(text)).join('')
            }<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text></svg>`;
    }

    saveToFile(fileName) {
        fs.writeFileSync(fileName, this.render());
        console.log(`SVG saved to ${fileName}`);
    }
}

async function runApp() {
    const svgCreator = new CreateSVG();

    try {
        const answers = await inquirer.prompt(questions);
        const { shape, text, color, confirm } = answers;

        if (confirm) {
            let shapeInstance;

            switch (shape) {
                case 'Triangle':
                    shapeInstance = new Triangle();
                    break;

                case 'Circle':
                    shapeInstance = new Circle();
                    break;

                case 'Rectangle':
                    shapeInstance = new Rectangle();
                    break;

                default:
                    console.log('Invalid shape choice');
                    return;
            }

            shapeInstance.setColor(color);
            svgCreator.addShape(shapeInstance, text);
            console.log('Shape added to SVG:', svgCreator.render());

            // Save SVG to file
            const fileName = `${shape.toLowerCase()}_output.svg`;
            svgCreator.saveToFile(fileName);
        } else {
            console.log('Operation canceled.');
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

//make some switch case questions for user input when using node index.js 
const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to draw?',
        choices: ['Triangle', 'Circle', 'Rectangle'],
    },
    {
        type: 'input',
        name: 'text',
        message: 'What would you like to write?',
    },
    {
        type: 'input',
        name: 'color',
        message: 'What color would you like to use?',
        default: 'green',
    },
    {
        type: 'confirm',
        name: 'confirm',
        message: 'Are you sure?',
    },
];

runApp();

