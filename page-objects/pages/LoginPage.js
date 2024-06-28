import { Selector, t } from "testcafe";

class LoginPage
{
    constructor()
    {
        this.txtUsername = Selector("#username");
        this.txtPassword = Selector("#password");
        this.btnLogin = Selector("button[value='Log in']");
        this.lblLogin = Selector("#customer_login div[class='u-column1 col-1'] h2");
        this.lblMyAccount = Selector(".zak-page-title");
        this.loggedInUser = Selector("ul.nav.navbar-nav li a b");
        this.errMsg = Selector("ul.woocommerce-error li");
        this.lnkLogout = Selector("nav.woocommerce-MyAccount-navigation li a[href*='my-account/customer-logout']");
    }

    async loginToApp(username, password)
    {
        await t.typeText(this.txtUsername,username);
        await t.typeText(this.txtPassword,password);
        await t.click(this.btnLogin);
    }
}
export default LoginPage;