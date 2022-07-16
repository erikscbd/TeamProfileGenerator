const inq = require("inquirer");
const { listenerCount } = require("process");

const promptForNextEmployee = () => {
    inq.prompt([{
        message: 'Who would you like to add to your team?',
        type: 'list',
        choices: ['Intern', 'Engineer', 'Done'],
        name: 'nextOperation'
    
}])

.then(answers => {
    switch (answers.nextOperation) {
        case 'Intern': {
            promptForIntern();
            break;
    }
        case 'Engineer': {
            promptForEngineer();
            break;
    }
        case 'Done': {
            console.log('Thanks for adding your team!');
            break;
    }

        
    }
})

inq.prompt([
    {
      message: "What is your name?",
      type: "input",
      name: "firstName",
    },
    {
      message: "What is your employye ID?",
      type: "input",
      name: "employeeId",
    },
    {
      message: "What is your email address?",
      type: "input",
      name: "email",
    },
    {
      message: "What is your office number?",
      type: "input",
      name: "officeNumber",
    },
  ])
  .then((answers) => {
    console.log(answers);
  });
}


  
