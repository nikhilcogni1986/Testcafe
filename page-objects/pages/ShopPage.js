import { Selector,t } from "testcafe";

class ShopPage
{
    constructor()
    {
        this.productName = Selector("ul.products.columns-3 li a");
        this.btnAddToCart = Selector("button[name='add-to-cart']");
        this.cartMessage = Selector("div.woocommerce-message");
        this.lnkViewCart = Selector("div.woocommerce-message a[href*='cart']")
    }

    async selectProduct(productname)
    {
        console.log(productname);
        let productText = this.productName.find("h2").withExactText(productname);
        await t.click(productText);
        await t.click(this.btnAddToCart);
    }
}
export default ShopPage;