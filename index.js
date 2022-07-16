// import inq from 'inquirer';
const inq = require('inquirer');
const { listenerCount } = require("process");

const addEngineer = () => {
  inq
    .prompt([
      {
        message: "What is the engineer's name?",
        type: "input",
        name: "firstName",
      },
      {
        message: "What is the engineer's employee ID?",
        type: "input",
        name: "employeeId",
      },
      {
        message: "What is the engineer's email address?",
        type: "input",
        name: "email",
      },
      {
        message: "What is the engineer's GitHub?",
        type: "input",
        name: "githubUsername",
      },
    ])
    .then((answers) => {
      //Make Engineer class from answers
      promptForNextEmployee();
    });
};

const addIntern = () => {
  inq
    .prompt([
      {
        message: "What is the intern's name?",
        type: "input",
        name: "firstName",
      },
      {
        message: "What is the intern's employee ID?",
        type: "input",
        name: "employeeId",
      },
      {
        message: "What is the intern's email address?",
        type: "input",
        name: "email",
      },
      {
        message: "What is the intern's school?",
        type: "input",
        name: "school",
      },
    ])
    .then((answers) => {
      //Make Intern class from answers
      promptForNextEmployee();
    });
};

const promptForNextEmployee = () => {
  inq
    .prompt([
      {
        message: "Who would you like to add to your team?",
        type: "list",
        choices: ["Intern", "Engineer", "Done"],
        name: "nextOperation",
      },
    ])
    .then((answers) => {
      switch (answers.nextOperation) {
        case "Intern": {
          // Add Intern
          addIntern();
          break;
        }
        case "Engineer": {
          // Add Engineer
          addEngineer();
          break;
        }
        case "Done": {
          break;
        }
      }
    });

  inq
    .prompt([
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
      //Make a manager using manager answers
    });
};
