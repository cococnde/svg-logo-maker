let inquirer;
const fs = require('fs');
// Importing the shapes

const { Square, Circle, Triangle } = require('./lib/shapes.js');
// SVG Function
function createSVG(answers) {
    let shape;
    switch(answers.shape) {
        case 'Square':
            shape = new Square(answers.text, answers.textColor, answers.logoColor);
            break;
        case 'Circle':
            shape = new Circle(answers.text, answers.textColor, answers.logoColor);
            break;
        case 'Triangle':
            shape = new Triangle(answers.text, answers.textColor, answers.logoColor);
            break;
    }
    return shape.createSVG();
}


import('inquirer').then(module => {
    inquirer = module.default || module;

    inquirer.prompt ([
        {
            type: 'input',
            message: 'Please enter up to three alphabet characters for your logo',
            name: 'text'
        },
        {
            type: 'input',
            message: 'Please enter a text color either via hex code or color name',
            name: 'textColor'
        },
        {
        type: 'list',
        message: 'Please select a logo shape ',
        name: 'shape',
        choices: ['Square', 'Circle', 'Triangle']
    },
    
    {
        type: 'input',
        message: 'Please enter a logo color either via hex code or color name',
        name: 'logoColor'
    }
    
]).then(answers => {
    const svg = createSVG({
        
        text: answers.text, 
        textColor: answers.textColor, 
        logoColor: answers.logoColor, 
        shape: answers.shape
    
    });

    fs.writeFile('./examples/logo.svg', svg, err => {
        if(err) {
            console.error(err);
    } else {
        console.log('Generated logo.svg');
    }
    });

    if(answers.shape === 'Circle') {

    let myCircle = new Circle(answers.text, answers.textColor ,answers.logoColor);
    } else if(answers.shape === 'Square') {
        let mySquare = new Square(answers.text, answers.textColor, answers.logoColor);
    } else if(answers.shape === 'Triangle') {
        let myTriangle = new Triangle(answers.text, answers.textColor, answers.logoColor);
    }
}).catch(err => {
    console.error(err);
});


})

let jest;

import('jest').then(module => {
    jest = module.default || module;
}).catch(err => {
    console.error(err);
});

