import { Selector, fixture, test } from "testcafe";

fixture("Double click test")
    .page("https://demoqa.com/buttons")
    .skipJsErrors();

test('Double Click Test', async t =>
{
    await t.navigateTo("https://demoqa.com/buttons");
    await t.doubleClick(Selector("#doubleClickBtn"));
    t.expect(Selector("#doubleClickMessage").visible).ok;
    console.log(await Selector("#doubleClickMessage").textContent);
}).timeouts({pageLoadTimeout:60000});