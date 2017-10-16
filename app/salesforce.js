let force = require('nforce');

const username = '';
const password = '';
const clientId = '';
const clientSecret = '';
const securityToken = '';

if (!username) { missing("SALESFORCE_USERNAME"); }
if (!password) { missing("SALESFORCE_PASSWORD"); }
if (!clientId) { missing("SALESFORCE_CLIENT_ID"); }
if (!clientSecret) { missing("SALESFORCE_CLIENT_SECRET"); }
if (!securityToken) { missing("SALESFORCE_SECURITY_TOKEN"); }

let org = force.createConnection({
    clientId,
    clientSecret,
    environment: ("production"),
    redirectUri: "http://localhost:3000/oauth/_callback",
    mode: "single",
    version: "40.0",
    autoRefresh: true
});
console.log("*** Attempting Salesforce authentication...");
org.authenticate({ username, password, securityToken }, (err) => {
    if (err) {
        console.error("*** Salesforce authentication error:");
        console.error(err);
        process.exit(1);
    } else {
        console.log("*** Salesforce authentication successful.");
        console.log("- Instance URL: %s", org.oauth.instance_url);
        // console.log("- OAuth Token: %s", org.oauth.access_token);
        org.authenticated = true;
    }
});

module.exports = { org, force };
