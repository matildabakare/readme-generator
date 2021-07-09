// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'project',
            message: 'What is the name of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please provide a description of your project!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions for your project (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please provide installation instructions for your project!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage information for your project (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please provide usage information for your project!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Provide usage contribution guidelines for your project (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please provide contribution guidelines for your project!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide usage test instructions for your project (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please provide test instructions for your project!');
                return false;
              }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license does your application use?',
            choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'ISC']
        },
        {
          type: 'input',
          name: 'github',
          message: 'Enter your GitHub Username (Required)',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your Github Username!');
              return false;
            }
          }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter your email!');
                return false;
              }
            }
        }
    ]);
};


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// }

// TODO: Create a function to initialize app
function init() {
    questions()
    .then(writeToFile(README.md, data))
}

// Function call to initialize app
init();
