import {Selector, fixture, test} from 'testcafe'

fixture("Logout Test")
    .page("https://practicetestautomation.com/practice-test-login/");
    
test("Login and Logout scenario", async t=>{

    await t
        .navigateTo("https://practicetestautomation.com/practice-test-login/");

    await t
            .maximizeWindow()
            .typeText("#username","student")
            .typeText("#password","Password123")
            .click("#submit");
    
    let loggedHeaderText = await Selector("h1.post-title").innerText; 
    await t.expect(loggedHeaderText).eql("Logged In Successfully");

});