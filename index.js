const inquirer = require("inquirer");

const fs = require('fs');

console.log(' Welcome to Team Profile Generator ');

const questions = [

    {
        type: 'input',
        name: 'Employee',
        message: 'What is the employee\'s name?',
        validate: your_Input => {
            if (your_Input) {
                return true;
            } else {
                console.log('Enter the employee name');
                return false;
            }
        }
    }
]