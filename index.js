const inquirer = require("inquirer");
const fs = require("fs").promises;
const licenseUtils = require("./license-utils");
const buildReadme = require("./build-readme");

const licenseUtil = new licenseUtils.GithubLicense();
const licenseChoices = licenseUtils.featuredLicenseList;

const renderReadme = new buildReadme.RenderReadme();

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
        name: "testInformation",
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
async function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, "utf8", function (err) {
        if (err) {
            throw err;
        }
    })
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
    // const licenseTest = await licenseUtil.checkLicense(licenseName);
    // console.log(licenseTest);
    // return licenseTest;

}

// function to initialize program
async function init() {
    try {
        //ask questions
        const responses = await inquirer.prompt(questions);
        await console.log(responses);
        await console.log(responses.projectLicenseChoice)
        //get license data
        const licenseData = await licenseUtil.getLicense(responses.projectLicenseChoice);
        await console.log(licenseData);

        const readmeContent = await renderReadme.outputReadme(responses, licenseData)

        await console.log(readmeContent);

        await writeToFile("new.README.md", readmeContent);


    }
    //render markdown
    //write file
    catch (err) {
        throw err
    }

}

// function call to initialize program
init();
