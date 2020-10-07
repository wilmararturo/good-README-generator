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

module.exports = GithubLicense;