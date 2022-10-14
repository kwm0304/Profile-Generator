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
    return inquirer.prompt({
        
    })
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

