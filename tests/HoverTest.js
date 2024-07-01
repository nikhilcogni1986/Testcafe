import { Selector } from "testcafe";

fixture `Hovering over element`
    .page("https://www.lambdatest.com/selenium-playground/hover-demo")
    .skipJsErrors();

test("Hovering over a web element", async t =>
{
    await t
        .maximizeWindow()
        .hover(Selector("div a[href*='feature'] i"))
        .wait(2000)
        .click(Selector("ul.header_inner.header-icon li div p").withText("Online Browser Testing"));
    
    const headerText = await Selector("div h1").innerText;
    await t.expect(headerText).eql("Online Cross Browser Testing Tool");
});