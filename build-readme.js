function RenderReadme() { }

RenderReadme.prototype.outputReadme = async function (responseObj, licenseObj) {

    const readmeTemplate = `\
# ${responseObj.projectTitle}\n\
\n\
---\n\
\n\
![](https://img.shields.io/badge/README-${encodeURIComponent(responseObj.projectTitle.trim())}-success)\n\
![](https://img.shields.io/badge/license-${encodeURIComponent(licenseObj.name).trim()}-green)\n\
\n\
## Description\n\
\n\
---\n\
\n\
${responseObj.projectDescription}\n\
\n\
## Table of Contents\n\
- [Install](#install)\n\
- [Usage](#usage)\n\
- [Tests](#tests)\n\
- [Questions](#questions)\n\
- [Contributing](#contributing)\n\
- [License](#license)\n\
\n\
## Install\n\
\n\
---\n\
\n\
${responseObj.installInstructions}\n\
\n\
## Usage\n\
\n\
---\n\
\n\
${responseObj.usageInformation}\n\
\n\
## Tests\n\
\n\
---\n\
\n\
${responseObj.testInformation}\n\
\n\
## Questions\n\
\n\
---\n\
\n\
Contact:\n\
\n\
[${responseObj.githubUsername}](https://github.com/${responseObj.githubUsername}) on GitHub\n\
\n\
[e-mail](mailto:${responseObj.eMail})\n\
\n\
## Contributing\n\
\n\
---\n\
\n\
${responseObj.contributionGuidlines}\n\
\n\
## License\n\
\n\
---\n\
\n\
Licensed under the [${licenseObj.name}](${licenseObj.url})\n\
    `
    console.log(readmeTemplate);
    return readmeTemplate.trim();
}

const sampleResponeObj = {
    userName: 'Tyler Durden',
    eMail: 'nobody@gmail.com',
    githubUsername: 'nobody',
    projectTitle: 'Special Project Gamma',
    projectDescription: 'Project Gamma has a name and its name is Project Gamma',
    installInstructions: 'Install Gamma',
    usageInformation: 'Run Gamma',
    contributionGuidlines: 'Contact the maintainer',
    testInformation: 'n/a',
    projectLicenseChoice: 'mit'
}

const sampleLicenseObj = {

    "key": "mit",
    "name": "MIT License",
    "spdx_id": "MIT",
    "url": "https://api.github.com/licenses/mit",
    "node_id": "MDc6TGljZW5zZTEz",
    "html_url": "http://choosealicense.com/licenses/mit/",
    "description": "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
    "implementation": "Create a text file (typically named LICENSE or LICENSE.txt) in the root of your source code and copy the text of the license into the file. Replace [year] with the current year and [fullname] with the name (or names) of the copyright holders.",
    "permissions": [
        "commercial-use",
        "modifications",
        "distribution",
        "private-use"
    ],
    "conditions": [
        "include-copyright"
    ],
    "limitations": [
        "liability",
        "warranty"
    ],
    "body": "MIT License\n\nCopyright (c) [year] [fullname]\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n",
    "featured": true
}

// const renderReadme = new RenderReadme();

// renderReadme.outputReadme(sampleResponeObj, sampleLicenseObj);

module.exports = {
    RenderReadme,
}