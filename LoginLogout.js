import {Selector, fixture, test} from 'testcafe'

fixture("Logout Test")
    .page("https://practicetestautomation.com/practice-test-login/");
    
test("Login and Logout scenario", async t=>{

    await t
        .navigateTo("https://practicetestautomation.com/practice-test-login/")
        .maximizeWindow();

    await t
            .typeText("#username","student")
            .typeText("#password","Password123")
            .click("#submit");
    
    await t.expect(await Selector("h1.post-title").innerText).eql("Logged In Successfully");

});