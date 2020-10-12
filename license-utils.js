const axios = require("axios");

function GithubLicense() { }

GithubLicense.prototype.checkLicense = async (licenseName) => {

    const url = `https://api.github.com/licenses/${licenseName}`;
    const config = { headers: { accept: "application/vnd.github.v3+json" } };


    const licenseStatus = await axios.get(url, config)
        .then(function (res) {
            if (res.data["name"]) {
                return true;
            } else {
                return false;
            }
        })
        .catch(function (err) {
            throw err;
        });
    return licenseStatus




}


GithubLicense.prototype.getLicenseList = async function () {

    const url = `https://api.github.com/licenses`;
    const config = { headers: { accept: "application/vnd.github.v3+json" } };
    let responseList = {};

    try {
        const { data: licenses } = await axios.get(url, config);
        responseList = await licenses.map(license => {
            //{name:"display",value:"return",short:"feedback"}
            const listObj = {};
            listObj["name"] = license.name;
            listObj["value"] = license.key;
            listObj["short"] = license.spdx_id;

            return listObj;
        });

    }
    catch (e) { throw e; }

    return await Promise.resolve(responseList);
}



GithubLicense.prototype.getLicense = async function (licenseName) {

    const url = `https://api.github.com/licenses/${licenseName}`;
    const config = { headers: { accept: "application/vnd.github.v3+json" } };
    let licenseData = {};

    try {
        const { data: license } = await axios.get(url, config);
        licenseData = license;

    }
    catch (e) { throw e; }

    return await Promise.resolve(licenseData);

}

// GithubLicense.prototype.getGitHubAPI = async function (endpoint) {



// }




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