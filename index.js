const inquirer = require("inquirer");
const licenseUtils = require("./license-utils");

const licenseUtil = new licenseUtils();

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
        type: "list",
        name: "projectLicenseChoice",
        message: "Project License",
        choices: [
            {
                name: 'GNU Affero General Public License v3.0',
                value: 'agpl-3.0',
                short: 'GNU Affero General Public License v3.0'
            },
            {
                name: 'Apache License 2.0',
                value: 'apache-2.0',
                short: 'Apache License 2.0'
            },
            {
                name: 'BSD 2-Clause "Simplified" License',
                value: 'bsd-2-clause',
                short: 'BSD 2-Clause "Simplified" License'
            },
            {
                name: 'BSD 3-Clause "New" or "Revised" License',
                value: 'bsd-3-clause',
                short: 'BSD 3-Clause "New" or "Revised" License'
            },
            {
                name: 'Boost Software License 1.0',
                value: 'bsl-1.0',
                short: 'Boost Software License 1.0'
            },
            {
                name: 'Creative Commons Zero v1.0 Universal',
                value: 'cc0-1.0',
                short: 'Creative Commons Zero v1.0 Universal'
            },
            {
                name: 'Eclipse Public License 2.0',
                value: 'epl-2.0',
                short: 'Eclipse Public License 2.0'
            },
            {
                name: 'GNU General Public License v2.0',
                value: 'gpl-2.0',
                short: 'GNU General Public License v2.0'
            },
            {
                name: 'GNU General Public License v3.0',
                value: 'gpl-3.0',
                short: 'GNU General Public License v3.0'
            },
            {
                name: 'GNU Lesser General Public License v2.1',
                value: 'lgpl-2.1',
                short: 'GNU Lesser General Public License v2.1'
            },
            { name: 'MIT License', value: 'mit', short: 'MIT License' },
            {
                name: 'Mozilla Public License 2.0',
                value: 'mpl-2.0',
                short: 'Mozilla Public License 2.0'
            },
            { name: 'The Unlicense', value: 'unlicense', short: 'The Unlicense' }
        ]

    },



];


// function to write README file
function writeToFile(fileName, data) {
}

function getAnswers() {

    const results = inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            return answers;
        });
    console.log(results);

    return results;




}


async function checkLicenseName(licenseName) {
    try {
        const licenseTest = await licenseUtil.checkLicense(licenseName);
        return licenseTest;
    }
    catch (err) {
        throw err;
    }

}

async function getLicenseList() {
    try {
        const licenseList = await licenseUtil.getLicenseList();
        return licenseList;
    }
    catch (err) {
        throw err;

    }

}

async function getLicenseData(licenseName) {
    const licenseTest = await licenseUtil.checkLicense(licenseName);
    console.log(licenseTest);
    return licenseTest;

}

// function to initialize program
async function init() {
    await inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            return answers;
        });

}

// function call to initialize program
init();
