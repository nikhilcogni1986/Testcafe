import {Selector, fixture, test} from 'testcafe'

fixture("Checkbox operations")
    .page("https://rahulshettyacademy.com/AutomationPractice/");

test("Multiple checkboxes operation", async t =>
{
    await t
        .click("#checkBoxOption1")
        .click("#checkBoxOption2")
        .click("#checkBoxOption3");

    t.expect(await Selector("#checkBoxOption1").checked).ok;
    t.expect(await Selector("#checkBoxOption2").checked).ok;
    t.expect(await Selector("#checkBoxOption3").checked).ok;
});