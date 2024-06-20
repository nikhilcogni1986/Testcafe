import { Selector, fixture, test } from "testcafe";

fixture("Double click test")
    .page("https://demoqa.com/buttons");

test('Double Click Test', async t =>
{
    await t.navigateTo("https://demoqa.com/buttons").maximizeWindow();
    await t.doubleClick(Selector("#doubleClickBtn"));
    t.expect(Selector("#doubleClickMessage").visible).ok;
    console.log(Selector("#doubleClickMessage").textContent);
});