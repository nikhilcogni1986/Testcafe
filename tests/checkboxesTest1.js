import {Selector, fixture, test} from 'testcafe'

fixture("Checkbox operations")
    .page("https://rahulshettyacademy.com/AutomationPractice/");

test("Checkbox operations", async t =>
{
    await t
        .maximizeWindow()
        .click("#checkBoxOption1")
        .expect(Selector("#checkBoxOption1").checked).ok;
});

test("Multiple checkboxes operation", async t =>
{
    await t
        .maximizeWindow()
        .click("#checkBoxOption1")
        .click("#checkBoxOption2")
        .click("#checkBoxOption3")
        .wait(4000);
})