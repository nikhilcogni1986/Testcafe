import { Selector, fixture, test } from "testcafe";

fixture("Radio buttons Test")
    .page("https://rahulshettyacademy.com/AutomationPractice/");

test("Radio button test", async t =>{

    await t.navigateTo("https://rahulshettyacademy.com/AutomationPractice/");
    t
        .click(Selector("input[value='radio1']"))
        .expect(Selector("input[value='radio1']").selected).ok;

    await t.click(Selector("input[value='radio2']"))
            .expect(Selector("input[value='radio2']").selected).ok;
});