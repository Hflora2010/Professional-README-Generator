// TODO: Include packages needed for this application

const fs = require('fs/promises');

const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Describe how to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Describe how to use your project application?',
        name: 'usage',
    },
    {
        type: "list",
        message: "What license do you choose for your project?",
        choices: [
            "Apache",
            "MIT",
            "Mozilla",
            "Perl"
        ],
        name: "license",

    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use."
    },
    {
        type: "input",
        name: "contributing",
        message: "Add guidelines so that other developers can contribute to your project."
    },
    {
        type: "input",
        name: "tests",
        message: "If applicable, provide any tests written for your application and provide examples on how to run them."
    },
    {
        type: "input",
        name: "questions",
        message: "What can users do if they have an issue?"
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter you e-mail address."
    }
];

// TODO: Create a function to write README file
function writeToFile(data, fileName ='README.md') {
    fs.writeFile(fileName, data) .then(result => {
        console.log(result);
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
        writeToFile(generateMarkdown(answers))
        })
        .catch(error => {
            throw error
        })
}

// Function call to initialize app
init();
