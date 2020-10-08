const inquirer = require("inquirer");
const licenseUtils = require("./license-utils");

const licenseUtil = new licenseUtils.GithubLicense();
const licenseChoices = licenseUtils.featuredLicenseList;

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
        name: "installInstructions",
        message: "Install instructions:"
    },
    {
        type: "input",
        name: "usageInformation",
        message: "Usage information:"
    },
    {
        type: "input",
        name: "contributionGuidlines",
        message: "Contribution guidlines:"
    },
    {
        type: "input",
        name: "testInformations",
        message: "Tests:"
    },
    {
        type: "list",
        name: "projectLicenseChoice",
        message: "Project License",
        pageSize: 15,
        choices: licenseChoices
    },
];


// function to write README file
function writeToFile(fileName, data) {
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
