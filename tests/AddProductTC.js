import {fixture, t} from 'testcafe'
import NavBar from '../page-objects/components/NavBar'
import LoginPage from '../page-objects/pages/LoginPage'
import ShopPage from '../page-objects/pages/ShopPage';

const loginPage = new LoginPage();
const navBar = new NavBar();
const shop = new ShopPage();

fixture `Add Product to Cart`
    .page('https://practice.sdetunicorns.com/')
    .skipJsErrors();

test("Add a product to cart", async t =>{

    t
        .maximizeWindow()
        .click(navBar.lnkMyAccount)
        .expect(await loginPage.lblLogin.visible).ok;
    
    await loginPage.loginToApp("nikhilcogni", "Mysore_2024");
    t.expect(await loginPage.lnkLogout.visible).ok;
    
    await t.click(navBar.lnkShop);
    await shop.selectProduct("Branded Converse");

    const cartMsg = await shop.cartMessage.innerText;
    await t.expect(cartMsg).contains(" “Branded Converse” has been added to your cart.")

    await t.click(shop.lnkViewCart);
    


});