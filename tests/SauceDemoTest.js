import { Selector, test } from "testcafe";

fixture `Login to Sauce Demo`
    .page("https://www.saucedemo.com/")
    .skipJsErrors();


test("Login to Saucedemo App with valid creds", async t =>
{
    t
        .maximizeWindow()
        .typeText("#user-name", "standard_user")
        .typeText("#password", "secret_sauce")
        .click("#login-button")
        .expect(Selector("div.app_logo").visible).ok;

    //Logout        
    await t
            .click("#react-burger-menu-btn")
            .click("#logout_sidebar_link");
});