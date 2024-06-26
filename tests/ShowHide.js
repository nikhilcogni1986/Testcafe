import { Selector, fixture } from "testcafe";

fixture("Show and Hide Textboxes")
    .page("https://rahulshettyacademy.com/AutomationPractice/");

test("Hide/Show a textbox", async t =>
{
    //Type text in textbox
    await t
           .maximizeWindow() 
           .typeText("#displayed-text","TESTCAFE"); 
    await t.click("#hide-textbox")
    t.expect(await Selector("#displayed-text").visible).notOk

    await t.click("#show-textbox");
    t.expect(await Selector("#displayed-text").visible).ok;
});