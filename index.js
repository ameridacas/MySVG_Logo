//Runs the application using imports from lib/
const { Triangle, Circle, Rectangle } = require('./lib/shapes');
const { prompt } = require('inquirer');
const inquirer = require('inquirer');



//make some switch case questions for user input when using node index.js 
const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to draw?',
        choices: ['Triangle', 'Circle', 'Rectangle'],
    },
    {
        type: "input",
        name: "text",
        message: "What would you like to write?" 
    },
    {
        type: 'input',
        name: 'color',
        message: 'What color would you like to use?',
        default: 'red',
    },
    {
        type: 'confirm',
        name: 'confirm',
        message: 'Are you sure?',
    },
];
