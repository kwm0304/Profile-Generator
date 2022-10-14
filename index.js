//Importing objects
const templatehelper = require('./src/templatehelper');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const inquirer = require('inquirer');

const team = []
//Manager prompt opens on start
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Manager name:', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter manager name");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Manager ID:",
            validate: idInput => {
                if  (isNaN(idInput)) {
                    console.log ("Please enter manager's id")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Manager email:",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter valid email')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Manager office number:",
            validate: officeNumber => {
                if  (isNaN(officeNumber)) {
                    console.log ('Please enter valid office number')
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
};
//Asks to add new employees and redirects to engineer/intern 
const newEmployee = () => {
    return inquirer.prompt({

    })
};
//creates renderedoutput file and logs errors
const writeFile = data => {
    fs.writeFile('./dist/renderedoutput.html', data, err => {
        if(err) {
            console.log(err);
            return;
        }
    })
};

