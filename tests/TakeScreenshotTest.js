import { Selector } from "testcafe";

fixture `Use of take screenshot method`
    .page("https://www.lambdatest.com/selenium-playground/checkbox-demo")
    .skipJsErrors();

test("Take the screenshot of website", async t =>{

   await t.click(Selector("#isAgeSelected"));
   await t.takeScreenshot(
    {
        path: "screenshots/checkbox1.png",
        fullPage:true
    })
});

test('Take the screenshot of web element', async t =>{

    await t.click(Selector("#isAgeSelected"));
    await t.takeElementScreenshot(Selector("#isAgeSelected"), "screenshots/checkbox2.png");

});