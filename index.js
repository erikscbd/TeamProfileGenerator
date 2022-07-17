// import inq from 'inquirer';
const inq = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employees = [];

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
      const engineer = new Engineer(answers.firstName, answers.employeeId, answers.email, answers.githubUsername);
      employees.push(engineer);
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
      const intern = new Intern(answers.firstName, answers.employeeId, answers.email, answers.school);
      employees.push(intern);
      promptForNextEmployee();
    });
}

const generateHTML = (employee) => {
    let template = `
    <div> 
    <h2>${employees.getName()}</h2>
    <div>role:${employees.getRole()}</div>
    <div>ID:${employees.getId()}</div>
    <div>Email:${employees.getEmail()}</div>`;

const role = employees.getRole();
if (role === "Manager") {
  template += `<div>Office Number:${employees.getOfficeNumber()}</div>`
} else if (role === "Engineer") {
  template += `<div>GitHub:${employees.getGithub()}</div>`
} else if (role === "Intern") {
    template += `<div>School:${employees.getSchool()}</div>`
}
template += `</div>`;
return template;
}

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
        case 'Intern': {
          // Add Intern
          addIntern();
          break;
        }
        case 'Engineer': {
          // Add Engineer
          addEngineer();
          break;
        }
        case "Done": {
         //Generate HTML
            let htmlBody = "";
            for(const employee of employees) {
                htmlBody += generateHTML(employee);
            }
            const html = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Document</title>
            </head>
            <body>
            ${htmlBody}
            </body>
            </html>`
            fs.writeFileSync("./index.html", html);
            console.log("Team generated!");
            break;
        }
      }
    })

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
        const manager = new Manager(answers.firstName, answers.employeeId, answers.email, answers.officeNumber);
        employees.push(manager);
      promptForNextEmployee();
    });
};
