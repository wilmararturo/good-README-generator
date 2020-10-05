const inquirer = require("inquirer");

require("inquirer");


// array of questions for user
const questions = [

    {
        type: "input",
        name: "userName",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "eMail",
        message: "What is your e-mail?",
        validate: function (value) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(value).toLowerCase()) || "Please enter a properly formatted e-mail";
        }
    },
    {
        type: "input",
        name: "githubUsername",
        message: "What is your GitHub Username?"
    },
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of the project?",
    },
    {
        type: "input",
        name: "projectDescription",
        message: "Project desscription:"
    },
    {
        type: "input",
        name: "projectLicense",
        message: "Project License",
    },



];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
        })
}

// function call to initialize program
init();
