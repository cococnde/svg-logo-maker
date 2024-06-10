let inquirer;
const fs = require('fs');
const jest = require('jest');

const { Square, Circle, Triangle } = require('./lib/shapes.js');
// SVG Function
function createSVG(answers) {
    let shape;
    switch(answers.shape) {
        case 'Square':
            shape = new Square(answers.logoColor);
            break;
        case 'Circle':
            shape = new Circle(answers.logoColor);
            break;
        case 'Triangle':
            shape = new Triangle(answers.logoColor);
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
            name: 'letters'
        },
        {
            type: 'input',
            message: 'Please enter a text color either via hex code or color name',
            name: 'textColor'
        },
        {
        type: 'list',
        message: 'Please select s logo shape ',
        name: 'shape',
        choices: ['Square', 'Circle', 'Triangle']
    },
    
    {
        type: 'input',
        message: 'Please enter a logo color either via hex code or color name',
        name: 'logoColor'
    }
    
]).then(answers => {
    const svg = createSVG(answers);
    fs.writeFile('logo.svg', svg, err => {
        if(err) {
            console.error(err);
    } else {
        console.log('Generated logo.svg');
    }
    });

}).catch(err => {
    console.error(err);
});
})
import('jest').then(module => {
    jest = module.default || module;
}).catch(err => {
    console.error(err);
});

