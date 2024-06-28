import { Selector } from "testcafe";

class NavBar
{
    constructor()
    {
        this.lnkHome = Selector("li[id='menu-item-489'] a");
        this.lnkMyAccount = Selector("ul[id='zak-primary-menu'] li a[href*='my-account']")
    }
}
export default NavBar;