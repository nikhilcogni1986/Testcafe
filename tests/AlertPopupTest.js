import { Selector } from "testcafe";

fixture `Handle Alert Popup`
    .page("https://rahulshettyacademy.com/AutomationPractice/");

test("Handle Alert modal popup", async t =>
{
    const txtName = Selector("#name");
    await t
        .maximizeWindow()
        .typeText(txtName,"Nikhil");

    await t.setNativeDialogHandler(() => true);
    await t.click("#alertbtn");
    await t.wait(3000);
});

test("Handle Confirm modal popup", async t =>
{
    const txtName = Selector("#name");
    await t.typeText(txtName,"Nikhil");
    await t.setNativeDialogHandler(() => true);
    await t.click("#confirmbtn");
    await t.wait(3000);
});

test("Handle Javascript alert popups", async t =>
{
    await t
            .navigateTo("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
            .maximizeWindow()
    await t.setNativeDialogHandler(()=> true); //clicks Ok button
    await t.click(Selector("p.text-gray-900.ml-10 button.btn.btn-dark.my-30"));
})

test("Handle Javascript confirm popup", async t=>
{
    await t
            .navigateTo("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
            .maximizeWindow()
    await t.setNativeDialogHandler(()=> true);
    await t.click(Selector("div:nth-child(2) > div > p.text-gray-900.text-size-16.mt-10.text-black.font-bold > button"));
    t.expect(Selector("#confirm-demo").visible).ok;
});

test("Handle Javascript Prompt popup", async t=>
{
    await t
            .navigateTo("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
            .maximizeWindow()
    await t.setNativeDialogHandler((prompt, text) =>
    {
        
    });
    await t.click(Selector("div:nth-child(3) > p.text-gray-900.ml-10.text-size-16 > button"));
});