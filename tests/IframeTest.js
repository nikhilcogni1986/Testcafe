import { Selector } from "testcafe";

fixture `Handle the Iframes`
    .page("https://www.lambdatest.com/selenium-playground/iframe-demo/")
    .skipJsErrors();

test("Handling iframes and perform test action on a web element", async t =>
{
    await t
        .maximizeWindow()
        .switchToIframe("#iFrame1")
        .wait(1000)
        .click(Selector("div.rsw-editor .rsw-ce"))
        .pressKey("ctrl+a")
        .pressKey("delete")
        .wait(1000)
        .typeText("div.rsw-editor .rsw-ce","TESTCAFE")
        .switchToMainWindow();
    
});