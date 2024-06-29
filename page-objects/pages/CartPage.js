import { Selector,t } from "testcafe";

class CartPage
{
    constructor()
    {
        this.lblCart = Selector("div h1");
        this.productName = Selector("td.product-name a");
        this.cartMessage = Selector("div.woocommerce-message");
        this.lnkViewCart = Selector("div.woocommerce-message a[href*='cart']")
    }

   
}
export default CartPage;