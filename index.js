// Ask the question to get empolyee details


// Create clases for Employee, Intern, Engineer, Manager


//Create our HTML

const inq = require('inquirer');

inq.prompt([{
    message: 'What is your name?',
    type: 'input',
    name: 'firstName'
},
{
    message: 'What is your employye ID?',
    type: 'input',
    name: 'employeeId'
},
{
    message: 'What is your email address?',
    type: 'input',
    name: 'email'
},
{
    message: 'What is your office number?',
    type: 'input',
    name: 'officeNumber'
},
]).then((answers) => {
    console.log(answers);
})