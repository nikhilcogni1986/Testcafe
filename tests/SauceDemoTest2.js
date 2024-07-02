import { Selector, test } from "testcafe";

fixture `Login to Sauce Demo`
    .page("https://www.saucedemo.com/")
    .skipJsErrors();


test("Login to Saucedemo App with Invalid creds", async t =>
{
    await t
        .maximizeWindow()
        .typeText("#user-name", "standard_user")
        .typeText("#password", "secret_sauc")
        .click("#login-button");
        
    t.expect(Selector("h3[data-test='error']").visible).ok;
});