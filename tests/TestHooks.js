import { Selector, t } from "testcafe";

fixture `Test Hooks with Before and After`
    .page("https://www.lambdatest.com/selenium-playground/checkbox-demo")
    .skipJsErrors();

test.before(async t =>
{
    console.log("I EXECUTE BEFORE MAIN CODE!!");
})
("Click on checkboxes", async() =>
{
    await t.click(Selector("#isAgeSelected"));
});

test.after(async t => 
{
    console.log("I EXECUTE AFTER MAIN CODE!!");

})
('Click on checkbox', async () => {
    await t.click(Selector("#isAgeSelected"));
});