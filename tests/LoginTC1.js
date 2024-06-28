import {fixture, t} from 'testcafe'
import NavBar from '../page-objects/components/NavBar'
import LoginPage from '../page-objects/pages/LoginPage'
const loginPage = new LoginPage();
const navBar = new NavBar();

fixture `Login to App`
    .page('https://practice.sdetunicorns.com/')
    .skipJsErrors();

test("Login to App with valid creds", async t =>{

    t
        .maximizeWindow()
        .click(navBar.lnkMyAccount)
        .expect(await loginPage.lblLogin.visible).ok;
    
    await loginPage.loginToApp("MMMMMM", "P_2024");
    t.expect(await loginPage.lnkLogout.visible).ok;

    await t.click(loginPage.lnkLogout);
    t.expect(await navBar.lnkMyAccount.visible).ok;

});

test("Login to App with Invalid creds", async t =>{

    await t
        .maximizeWindow()
        .click(navBar.lnkMyAccount);

    await loginPage.loginToApp("MMMMMM", "password");

    const errorMessage = await loginPage.errMsg.innerText;
    await t.expect(errorMessage).contains("The password you entered for the username");
});