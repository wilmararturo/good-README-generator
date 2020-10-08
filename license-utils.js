const axios = require("axios");

function GithubLicense() { }

GithubLicense.prototype.checkLicense = async function (licenseName) {

    const licenseData = await GithubLicense.prototype.getGitHubAPI(`/licenses/${licenseName}`);


    if (licenseData.data["name"]) {
        return true;
    } else {
        return false;
    }

}

GithubLicense.prototype.getLicenseList = async function () {
    try {
        const { 'data': licenses } = await GithubLicense.prototype.getGitHubAPI(`/licenses`);
        const licenseList = licenses.map(license => {
            //{name:"display",value:"return",short:"feedback"}
            const listObj = {};
            listObj["name"] = license.name;
            listObj["value"] = license.key;
            listObj["short"] = license.spdx_id;

            return listObj;
        }

        )

        return licenseList;

    }
    catch (err) { throw err }


}

GithubLicense.prototype.getLicense = async function (licenseName) {
    const licenseData = await GithubLicense.prototype.getGitHubAPI(`/licenses/${licenseName}`);

    return licenseData;
}

GithubLicense.prototype.getGitHubAPI = async function (endpoint) {
    try {
        const url = `https://api.github.com${endpoint}`;
        const config = { headers: { accept: "application/vnd.github.v3+json" } };

        const licenseData = await axios
            .get(url, config);
        return licenseData;
    }
    catch (err) {

        throw err;

    }

}

// const ghLicense = new GithubLicense();

// ghLicense.getLicenseList();
const featuredLicenseList =
    [
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

module.exports = {
    featuredLicenseList: featuredLicenseList,
    GithubLicense,
}