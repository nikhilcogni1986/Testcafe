import { fixture,t, Selector } from "testcafe";

fixture `Interact by pressKey function`
    .page `https://devexpress.github.io/testcafe/example/`;

test("Use of PressKey function", async t =>
{
    const selectBasedOnText = Selector("label").withText("I have tried TestCafe");
    await t
            .click(selectBasedOnText)
            .pressKey('Space');
    t.expect(await Selector("#slider").visible).notOk;
});

test('Use of tab key', async t =>
{
    await t.navigateTo("https://rahulshettyacademy.com/angularpractice/").maximizeWindow();
    const txtName = Selector("div.form-group input[name='name']")
    await t.typeText(txtName,"Automation");
    
    await t.pressKey('Tab');

    await t.typeText("#exampleInputPassword1","Password123");
    await t.wait(3000);
});