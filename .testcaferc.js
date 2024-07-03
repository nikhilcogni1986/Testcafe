//.testcaferc.js or .testcaferc.cjs

module.exports = 
{ // Settings go inside the module.exports statement.
    src: "TESTCAFE/tests/", // Tests
    browsers: ["chrome", "firefox"], // Browsers
    skipJsErrors: true, // Ignores JavaScript errors
}