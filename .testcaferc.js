//.testcaferc.js or .testcaferc.cjs

let os = require("os"); // Import any Node.js module you want.

module.exports = 
{ // Settings go inside the module.exports statement.
    src: "TESTCAFE/tests/", // Tests
    browsers: ["chrome", "firefox"], // Browsers
    skipJsErrors: true, // Ignores JavaScript errors
}