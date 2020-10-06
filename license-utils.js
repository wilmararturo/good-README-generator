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

GithubLicense.prototype.getLicense = async function (licenseName) {
    const licenseData = await GithubLicense.prototype.getGitHubAPI(`/licenses/${licenseName}`);

    return licenseData;
}

GithubLicense.prototype.getGitHubAPI = async function (endpoint) {
    try {
        const url = `https://api.github.com${endpoint}`;
        const config = { headers: { accept: "application/json" } };

        const licenseData = await axios
            .get(url, config);
        return licenseData;
    }
    catch (err) {

        throw err;

    }

}



module.exports = GithubLicense;