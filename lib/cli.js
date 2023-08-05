const inquirer = require('inquirer');
const { generateLogo } = require('./svg');

class CLI {
  async run() {
    console.log('Welcome to SVG Logo Maker!\n');

    const questions = [
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo:',
        validate: (input) => input.length <= 3 || 'Please enter up to three characters.',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hexadecimal number):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hexadecimal number):',
      },
    ];

    const answers = await inquirer.prompt(questions);

    const svgContent = generateLogo(answers);

    // Save the SVG content to a file named logo.svg
    const fs = require('fs');
    fs.writeFileSync('logo.svg', svgContent);

    console.log('Generated logo.svg');
  }
}

module.exports = CLI;