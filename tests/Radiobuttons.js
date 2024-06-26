import { Selector, fixture, test } from "testcafe";

fixture("Radio buttons Test")
    .page("https://rahulshettyacademy.com/AutomationPractice/");

test("Radio button test", async t =>{

    t
        .maximizeWindow()
        .click(Selector("input[value='radio1']"))
        .expect(Selector("input[value='radio1']").selected).ok;

    t
        .click(Selector("input[value='radio2']"))
        .expect(await Selector("input[value='radio2']").selected).ok;
});