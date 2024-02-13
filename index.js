const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const teamMembers = [];

function promptManagerInfo () {
        inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Introduce the name of the manager',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Introduce the ID of the manager',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Introduce the email address of the manager',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Introduce the office number for the manager',
        }
    ])
    .then(mngAnswers => {
        const manager = new Manager(mngAnswers.name, mngAnswers.id, mngAnswers.email, mngAnswers.officeNumber);
        teamMembers.push(manager);
        promptMenuTeam();
    });
}

function promptMenuTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name:'teamOptions',
            message: 'Add/amend a new role, if applicable',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish building the team']
        }     
    ])
    .then((userOptions) => {
        switch (userOptions.teamOptions) {
            case 'Add an engineer':
                    promptEngineerInfo();
                break;
            case 'Add an intern':
                    promptInternInfo();
                break;
            case 'Finish building the team':
                    finishBuildingTeam();
                break;
        } 
    });
}

function promptEngineerInfo() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Insert Engineer name',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Insert Engineer ID',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Insert Engineer email',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Insert Engineer GitHub username',
            name: 'github',
        }
    ])
    .then(engAnswers => {
        const engineer = new Engineer(engAnswers.name, engAnswers.id, engAnswers.email, engAnswers.github);
        teamMembers.push(engineer);
        promptMenuTeam();
    })
}

function promptInternInfo() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Insert Intern name',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Insert Intern ID',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Insert Intern email',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Insert Intern scool name',
            name: 'school',
        }
    ])
    .then(intAnswers => {
        const intern = new Intern(intAnswers.name, intAnswers.id, intAnswers.email, intAnswers.school);
        teamMembers.push(intern);
        promptMenuTeam();
    })
}

//generate html file

function finishBuildingTeam() {
    fs.writeFile(outputPath, render(teamMembers), (err) => {
        if (err) throw err;
        console.log('HTML file for the team has been successfully generated!');
    });
}

promptManagerInfo ();

